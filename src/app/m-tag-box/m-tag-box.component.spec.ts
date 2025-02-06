import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MTagBoxComponent } from './m-tag-box.component';

describe('MTagBoxComponent', () => {
  let component: MTagBoxComponent;
  let fixture: ComponentFixture<MTagBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MTagBoxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MTagBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
