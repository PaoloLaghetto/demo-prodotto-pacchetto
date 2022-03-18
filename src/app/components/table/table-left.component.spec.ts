import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableLeftComponent } from './table-left.component';

describe('TableLeftComponent', () => {
  let component: TableLeftComponent;
  let fixture: ComponentFixture<TableLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableLeftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
