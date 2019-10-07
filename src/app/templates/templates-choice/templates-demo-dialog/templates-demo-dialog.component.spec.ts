import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplatesDemoDialogComponent } from './templates-demo-dialog.component';

describe('TemplatesDemoDialogComponent', () => {
  let component: TemplatesDemoDialogComponent;
  let fixture: ComponentFixture<TemplatesDemoDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplatesDemoDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplatesDemoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
