import { TestBed } from '@angular/core/testing';

import { DraftListService } from './draft-list.service';

describe('DraftListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DraftListService = TestBed.get(DraftListService);
    expect(service).toBeTruthy();
  });
});
