import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillAgileComponent } from './skill-agile.component';

describe('SkillAgileComponent', () => {
  let component: SkillAgileComponent;
  let fixture: ComponentFixture<SkillAgileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillAgileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillAgileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
