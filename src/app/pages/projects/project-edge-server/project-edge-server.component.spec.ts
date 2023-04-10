import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectEdgeServerComponent } from './project-edge-server.component';

describe('ProjectEdgeServerComponent', () => {
  let component: ProjectEdgeServerComponent;
  let fixture: ComponentFixture<ProjectEdgeServerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectEdgeServerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectEdgeServerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
