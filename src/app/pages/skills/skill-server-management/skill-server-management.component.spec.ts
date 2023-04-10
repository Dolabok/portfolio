import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillServerManagementComponent } from './skill-server-management.component';

describe('SkillServerManagementComponent', () => {
  let component: SkillServerManagementComponent;
  let fixture: ComponentFixture<SkillServerManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillServerManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillServerManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
