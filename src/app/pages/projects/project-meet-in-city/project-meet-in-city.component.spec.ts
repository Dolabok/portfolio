import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectMeetInCityComponent } from './project-meet-in-city.component';

describe('ProjectMeetInCityComponent', () => {
  let component: ProjectMeetInCityComponent;
  let fixture: ComponentFixture<ProjectMeetInCityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectMeetInCityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectMeetInCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
