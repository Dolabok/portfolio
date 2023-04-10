import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineIntechComponent } from './timeline-intech.component';

describe('TimelineIntechComponent', () => {
  let component: TimelineIntechComponent;
  let fixture: ComponentFixture<TimelineIntechComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimelineIntechComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelineIntechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
