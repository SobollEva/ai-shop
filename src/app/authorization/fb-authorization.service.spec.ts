import { TestBed } from '@angular/core/testing';

import { FbAuthorizationService } from './fb-authorization.service';

describe('FbAuthorizationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FbAuthorizationService = TestBed.get(FbAuthorizationService);
    expect(service).toBeTruthy();
  });
});
