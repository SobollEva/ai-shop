import { TestBed, async, inject } from '@angular/core/testing';

import { PublishGuard } from './publish.guard';

describe('PublishGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PublishGuard]
    });
  });

  it('should ...', inject([PublishGuard], (guard: PublishGuard) => {
    expect(guard).toBeTruthy();
  }));
});
