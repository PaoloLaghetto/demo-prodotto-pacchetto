import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BroadcastWeekComponent } from './broadcast-week.component';

describe('BroadcastWeekComponent', () => {
  let component: BroadcastWeekComponent;
  let fixture: ComponentFixture<BroadcastWeekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BroadcastWeekComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BroadcastWeekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
