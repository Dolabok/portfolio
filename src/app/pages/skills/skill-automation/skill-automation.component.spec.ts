import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillAutomationComponent } from './skill-automation.component';

describe('SkillAutomationComponent', () => {
  let component: SkillAutomationComponent;
  let fixture: ComponentFixture<SkillAutomationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillAutomationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillAutomationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
