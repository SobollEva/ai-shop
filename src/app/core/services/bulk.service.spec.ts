import { TestBed } from '@angular/core/testing';

import { BulkService } from './bulk.service';

describe('PublishService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BulkService = TestBed.get(BulkService);
    expect(service).toBeTruthy();
  });
});
