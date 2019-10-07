import { TestBed } from '@angular/core/testing';

import { VideoRenderService } from './video-render.service';

describe('VideoRenderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VideoRenderService = TestBed.get(VideoRenderService);
    expect(service).toBeTruthy();
  });
});
