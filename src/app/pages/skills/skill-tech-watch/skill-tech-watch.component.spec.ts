import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillTechWatchComponent } from './skill-tech-watch.component';

describe('SkillTechWatchComponent', () => {
  let component: SkillTechWatchComponent;
  let fixture: ComponentFixture<SkillTechWatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillTechWatchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillTechWatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
