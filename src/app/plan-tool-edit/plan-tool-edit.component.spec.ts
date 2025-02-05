import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanToolEditComponent } from './plan-tool-edit.component';

describe('PlanToolEditComponent', () => {
  let component: PlanToolEditComponent;
  let fixture: ComponentFixture<PlanToolEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlanToolEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanToolEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
