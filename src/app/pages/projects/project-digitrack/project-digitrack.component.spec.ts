import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectDigitrackComponent } from './project-digitrack.component';

describe('ProjectDigitrackComponent', () => {
  let component: ProjectDigitrackComponent;
  let fixture: ComponentFixture<ProjectDigitrackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectDigitrackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectDigitrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
