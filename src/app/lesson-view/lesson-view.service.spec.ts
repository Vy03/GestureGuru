import { TestBed } from '@angular/core/testing';
import { lessonViewService } from './lesson-view.service';

describe('lessonViewService', () => {
  let service: lessonViewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(lessonViewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
