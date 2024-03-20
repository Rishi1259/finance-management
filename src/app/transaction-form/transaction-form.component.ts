import { Component, Input } from '@angular/core';
import { Transaction } from '../model/transaction.model';
import { FormControl } from '@angular/forms';
import * as moment from 'moment';
import { TransactionsListComponent } from '../transactions-list/transactions-list.component';
import { formActionService } from '../form-action.service';



@Component({
  selector: 'app-transaction-form',
  templateUrl: './transaction-form.component.html',
  styleUrls: ['./transaction-form.component.css'],
  providers: [TransactionsListComponent]
})
export class TransactionFormComponent {

  todays = new Date();
  todayDate = this.todays.toLocaleDateString();
  splitTodayDate: string[] = this.todayDate.split("/");
  formattedDate = this.splitTodayDate[2] + "-" + this.splitTodayDate[1] + "-" + this.splitTodayDate[0];

  today: string;
  transactionType = new FormControl();
  purchase = new FormControl();
  account = new FormControl();
  amount = new FormControl();
  note = new FormControl();
  selectedDate!: string;  
  maxDate: string

  constructor(
    private formActionService: formActionService,
    private transactionListCompoent: TransactionsListComponent
  ) { 
    this.today = this.formatDate(new Date());
    this.maxDate =  this.today;
    this.transactionListCompoent.selectedDateEvent.subscribe(
      (date: string) => this.selectedDate = date,
    );
  }

  ngOnInIt() { }


  formSubmit() {
    const transaction = new Transaction(new Date(moment().format(this.today)), 
      this.transactionType.value,
      this.purchase.value, 
      this.account.value, 
      this.amount.value,
      this.note.value);
    this.formActionService.addTransaction(transaction);
    if(this.selectedDate == this.today){
      this.formActionService.showTransactions(this.today);
    }
    
  }

  formatDate(date: Date): string {
    // Format the date to match the input type="date" format (YYYY-MM-DD)
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);
    return `${year}-${month}-${day}`;
  }

}
