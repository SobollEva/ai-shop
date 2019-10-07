import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetPublishComponent } from './widget-publish.component';

describe('WidgetPublishComponent', () => {
  let component: WidgetPublishComponent;
  let fixture: ComponentFixture<WidgetPublishComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetPublishComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetPublishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
