import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PPCarouselBoxComponent } from './pp-carousel-box.component';

describe('PPCarouselBoxComponent', () => {
  let component: PPCarouselBoxComponent;
  let fixture: ComponentFixture<PPCarouselBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PPCarouselBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PPCarouselBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
