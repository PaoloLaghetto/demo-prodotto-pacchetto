import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PPCompositionTabelComponent } from './pp-composition-table.component';

describe('PPCompositionTabelComponent', () => {
  let component: PPCompositionTabelComponent;
  let fixture: ComponentFixture<PPCompositionTabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PPCompositionTabelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PPCompositionTabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
