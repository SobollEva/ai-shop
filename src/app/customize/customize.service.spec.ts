import { TestBed, inject } from '@angular/core/testing';

import { CustomizeService } from './customize.service';

describe('TemplateEditService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CustomizeService]
    });
  });

  it('should be created', inject([CustomizeService], (service: CustomizeService) => {
    expect(service).toBeTruthy();
  }));
});
