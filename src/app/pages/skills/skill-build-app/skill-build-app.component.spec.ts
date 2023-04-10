import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillBuildAppComponent } from './skill-build-app.component';

describe('SkillBuildAppComponent', () => {
  let component: SkillBuildAppComponent;
  let fixture: ComponentFixture<SkillBuildAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillBuildAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillBuildAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
