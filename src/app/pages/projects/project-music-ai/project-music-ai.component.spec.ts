import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectMusicAiComponent } from './project-music-ai.component';

describe('ProjectMusicAiComponent', () => {
  let component: ProjectMusicAiComponent;
  let fixture: ComponentFixture<ProjectMusicAiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectMusicAiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectMusicAiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
