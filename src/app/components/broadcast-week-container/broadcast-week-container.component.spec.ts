import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BroadcastWeekContainerComponent } from './broadcast-week-container.component';

describe('BroadcastWeekContainerComponent', () => {
  let component: BroadcastWeekContainerComponent;
  let fixture: ComponentFixture<BroadcastWeekContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BroadcastWeekContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BroadcastWeekContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
