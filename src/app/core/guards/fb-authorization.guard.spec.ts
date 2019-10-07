import { TestBed, async, inject } from '@angular/core/testing';

import { FbAuthorizationGuard } from './fb-authorization.guard';

describe('FbAuthorizationGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FbAuthorizationGuard]
    });
  });

  it('should ...', inject([FbAuthorizationGuard], (guard: FbAuthorizationGuard) => {
    expect(guard).toBeTruthy();
  }));
});
