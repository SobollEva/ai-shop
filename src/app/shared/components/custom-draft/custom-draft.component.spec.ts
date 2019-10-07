import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomDraftComponent } from './custom-draft.component';

describe('CustomDraftComponent', () => {
  let component: CustomDraftComponent;
  let fixture: ComponentFixture<CustomDraftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomDraftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomDraftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
