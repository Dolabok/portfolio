import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineDublinComponent } from './timeline-dublin.component';

describe('TimelineDublinComponent', () => {
  let component: TimelineDublinComponent;
  let fixture: ComponentFixture<TimelineDublinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimelineDublinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelineDublinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
