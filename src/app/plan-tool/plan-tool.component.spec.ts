import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanToolComponent } from './plan-tool.component';

describe('PlanToolComponent', () => {
  let component: PlanToolComponent;
  let fixture: ComponentFixture<PlanToolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlanToolComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
