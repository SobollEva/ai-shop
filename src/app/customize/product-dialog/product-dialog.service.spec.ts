import { TestBed, inject } from '@angular/core/testing';

import { ProductDialogService } from './product-dialog.service';

describe('ProductDialogService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductDialogService]
    });
  });

  it('should be created', inject([ProductDialogService], (service: ProductDialogService) => {
    expect(service).toBeTruthy();
  }));
});
