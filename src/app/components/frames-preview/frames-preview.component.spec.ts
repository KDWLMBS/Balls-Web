import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FramesPreviewComponent } from './frames-preview.component';

describe('FramesPreviewComponent', () => {
  let component: FramesPreviewComponent;
  let fixture: ComponentFixture<FramesPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FramesPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FramesPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
