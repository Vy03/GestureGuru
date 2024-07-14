from flask import Flask, request, jsonify
import base64
import cv2
import numpy as np
from ultralytics import YOLO
import torch
import os 

app = Flask(__name__)

@app.route('/upload_video', methods=['POST'])
def upload_video():
    try:
        alfabeth = request.args.get('words', '')
        data = request.json
        video_base64 = data['video']
        
        video_data = base64.b64decode(video_base64)
        with open('./f_temp/uploaded_video.mp4', 'wb') as f:
            f.write(video_data)
        
        capture_frames('./f_temp/uploaded_video.mp4')
        prediction_probability = ASL_Alphabet(alfabeth=alfabeth, frame_path="./f_temp/frames")

        frames_dir = './f_temp/frames'
        if os.path.exists(frames_dir):
            for file in os.listdir(frames_dir):
                file_path = os.path.join(frames_dir, file)
                if os.path.isfile(file_path):
                    os.remove(file_path)

        # Delete files in ./f_temp except the frames folder
        for file in os.listdir('./f_temp'):
            file_path = os.path.join('./f_temp', file)
            if os.path.isfile(file_path):
                os.remove(file_path)

        return jsonify({"Prediction": prediction_probability}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 400

def capture_frames(video_path):
    frames_dir = './f_temp/frames'
    cap = cv2.VideoCapture(video_path)
    
    fps = int(cap.get(cv2.CAP_PROP_FPS))
    frame_count = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))
    duration = frame_count // fps
    
    frame_number = 0
    while cap.isOpened():
        ret, frame = cap.read()
        if not ret:
            break
        if frame_number % fps == 0:
            frame_time = frame_number // fps
            frame_file = f'{frames_dir}/frame_{frame_time}.jpg'
            cv2.imwrite(frame_file, frame)
        frame_number += 1
    
    cap.release()

def ASL_Alphabet(alfabeth, frame_path):
    # Load the model
    model_path = "model/" + alfabeth + ".pt"
    model = YOLO(model_path)

    frame_files = [f"{frame_path}/" + f for f in sorted(os.listdir(frame_path)) if f.endswith('.jpg')]

    array = []

    for frame_file in frame_files:
        results = model(frame_file)

        for result in results:
            boxes = result.boxes  
            probs = result.probs  
            
            if isinstance(boxes.conf, torch.Tensor):
                conf_array = boxes.conf.numpy()
            elif isinstance(boxes.conf, list):
                conf_array = np.array([conf.numpy() for conf in boxes.conf])
            else:
                raise TypeError("boxes.conf is neither a tensor nor a list of tensors")
            
            array.extend(conf_array)

    average_confidence = np.mean(array) if array else 0
    average_confidence_str = f"{(average_confidence*100):.2f}"
    print(f"Average Prediction Confidence: {average_confidence_str}")

    return average_confidence_str

if __name__ == '__main__':
    app.run(debug=False)
