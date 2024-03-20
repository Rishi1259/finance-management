import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadExpenseComponent } from './head-expense.component';

describe('HeadExpenseComponent', () => {
  let component: HeadExpenseComponent;
  let fixture: ComponentFixture<HeadExpenseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeadExpenseComponent]
    });
    fixture = TestBed.createComponent(HeadExpenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
