import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillBuildApiComponent } from './skill-build-api.component';

describe('SkillBuildApiComponent', () => {
  let component: SkillBuildApiComponent;
  let fixture: ComponentFixture<SkillBuildApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillBuildApiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillBuildApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
