import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuffoBluComponent } from './puffo-blu.component';

describe('PuffoBluComponent', () => {
  let component: PuffoBluComponent;
  let fixture: ComponentFixture<PuffoBluComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PuffoBluComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PuffoBluComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
