import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineMargauxComponent } from './timeline-margaux.component';

describe('TimelineMargauxComponent', () => {
  let component: TimelineMargauxComponent;
  let fixture: ComponentFixture<TimelineMargauxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimelineMargauxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelineMargauxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
