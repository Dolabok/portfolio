import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineStartintechComponent } from './timeline-startintech.component';

describe('TimelineStartintechComponent', () => {
  let component: TimelineStartintechComponent;
  let fixture: ComponentFixture<TimelineStartintechComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimelineStartintechComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelineStartintechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
