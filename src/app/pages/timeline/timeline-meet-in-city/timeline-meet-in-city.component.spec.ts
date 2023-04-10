import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineMeetInCityComponent } from './timeline-meet-in-city.component';

describe('TimelineMeetInCityComponent', () => {
  let component: TimelineMeetInCityComponent;
  let fixture: ComponentFixture<TimelineMeetInCityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimelineMeetInCityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelineMeetInCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
