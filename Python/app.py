from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
import base64
import cv2
import numpy as np
import os

# Hand Detection
import mediapipe as mp

# ASL Comparison
from ultralytics import YOLO
import torch

app = Flask(__name__)
CORS(app)

mp_hands = mp.solutions.hands.Hands()

@app.route('/capture_video', methods=['POST'])
@cross_origin()
def capture_video():
    try:
        alphabet = request.args.get('words', '')  # If you want to pass alphabet as query parameter
        data = request.json  # Assuming JSON payload with 'video' key containing base64 encoded video
        video_base64 = data['video']
        
        video_data = base64.b64decode(video_base64)
        with open('./app/f_temp/uploaded_video.mp4', 'wb') as f:
            f.write(video_data)
        
        capture_frames('./app/f_temp/uploaded_video.mp4')
        prediction_probability = ASL_Alphabet(alphabet, frame_path="./app/f_temp/frames")
        
        frames_dir = './app/f_temp/frames'
        if os.path.exists(frames_dir):
            for file in os.listdir(frames_dir):
                file_path = os.path.join(frames_dir, file)
                if os.path.isfile(file_path):
                    os.remove(file_path)
        
        # Delete files in ./app/f_temp except the frames folder
        for file in os.listdir('./app/f_temp'):
            file_path = os.path.join('./app/f_temp', file)
            if os.path.isfile(file_path) and file != 'frames':
                os.remove(file_path)
        
        return jsonify({"Prediction": prediction_probability}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 400

def capture_frames(video_path):
    frames_dir = './app/f_temp/frames'
    cap = cv2.VideoCapture(video_path)
    
    fps = int(cap.get(cv2.CAP_PROP_FPS))
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

def ASL_Alphabet(alphabet, frame_path):
    model_path = f"./app/model/{alphabet}.pt"
    model = YOLO(model_path)
    
    frame_files = [os.path.join(frame_path, f) for f in sorted(os.listdir(frame_path)) if f.endswith('.jpg')]
    
    array = []
    
    for frame_file in frame_files:
        hand_detection = cv2.imread(frame_file)
        results = mp_hands.process(hand_detection)
        if results.multi_hand_landmarks:
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
        else:
            array.append(0)
    
    average_confidence = np.mean(array) if array else 0
    average_confidence_str = f"{(average_confidence * 100):.2f}"
    print(f"Average Prediction Confidence: {average_confidence_str}")
    
    return average_confidence_str

if __name__ == '__main__':
    app.run(debug=True)
