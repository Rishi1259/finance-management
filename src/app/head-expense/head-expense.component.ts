import { Component, EventEmitter, Output } from '@angular/core';
import { formActionService } from '../form-action.service';

@Component({
  selector: 'app-head-expense',
  templateUrl: './head-expense.component.html',
  styleUrls: ['./head-expense.component.css'],
})
export class HeadExpenseComponent {

  constructor(
    private formActionService: formActionService
  ) {}

  ngOnInIt(){

  }

  toggleForm(){
    this.formActionService.displayTriggered();
  }

}
