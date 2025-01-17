import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvatarSwiperComponent } from './avatar-swiper.component';

describe('AvatarSwiperComponent', () => {
  let component: AvatarSwiperComponent;
  let fixture: ComponentFixture<AvatarSwiperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvatarSwiperComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvatarSwiperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
