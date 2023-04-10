import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillEnglishComponent } from './skill-english.component';

describe('SkillEnglishComponent', () => {
  let component: SkillEnglishComponent;
  let fixture: ComponentFixture<SkillEnglishComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillEnglishComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillEnglishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
