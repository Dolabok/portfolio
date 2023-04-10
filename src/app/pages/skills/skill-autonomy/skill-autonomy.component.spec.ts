import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillAutonomyComponent } from './skill-autonomy.component';

describe('SkillAutonomyComponent', () => {
  let component: SkillAutonomyComponent;
  let fixture: ComponentFixture<SkillAutonomyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillAutonomyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillAutonomyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
