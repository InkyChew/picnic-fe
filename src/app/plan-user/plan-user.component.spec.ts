import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanUserComponent } from './plan-user.component';

describe('PlanUserComponent', () => {
  let component: PlanUserComponent;
  let fixture: ComponentFixture<PlanUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlanUserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
