import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineAltaroadComponent } from './timeline-altaroad.component';

describe('TimelineAltaroadComponent', () => {
  let component: TimelineAltaroadComponent;
  let fixture: ComponentFixture<TimelineAltaroadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimelineAltaroadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelineAltaroadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
