import { TestBed, inject } from '@angular/core/testing';

import { PublishMainService } from './publish-main.service';

describe('PublishMainService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PublishMainService]
    });
  });

  it('should be created', inject([PublishMainService], (service: PublishMainService) => {
    expect(service).toBeTruthy();
  }));
});
