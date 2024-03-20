import { Component, EventEmitter, Injectable, Output } from '@angular/core';
import { Transaction } from '../model/transaction.model';
import { formActionService } from '../form-action.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-transactions-list',
  templateUrl: './transactions-list.component.html',
  styleUrls: ['./transactions-list.component.css'],
})

@Injectable(
  {
    providedIn: "root"
  }
)
export class TransactionsListComponent {

  @Output() selectedDateEvent = new EventEmitter<string>();

  today = new Date();
  todayDate = this.today.toLocaleDateString();
  splitTodayDate: string[] = this.todayDate.split("/");
  formattedDate = this.splitTodayDate[2] + "-" + this.splitTodayDate[1] + "-" + this.splitTodayDate[0];

  selectedDate: string;
  targetDate: Date = new Date(this.formattedDate);

  public transactions: Transaction[] = [];

  constructor(
    private formActionService: formActionService,
    private formBuilder: FormBuilder
  ) {
    this.transactions = this.formActionService.transactions;
    this.formActionService.updateTansList.subscribe(
      (trans: Transaction[]) => this.transactions = trans,
    );
    this.selectedDate = this.formatDate(new Date());

  }


  ngOnInIt() {
    this.showTransactions(this.formatDate(this.today));
  }


  deleteTransaction(pos: number) {
    this.formActionService.deleteTransaction(pos);
  }

  incrementDate() {
    const selectedDate = new Date(this.selectedDate);
    const today = new Date();
    selectedDate.setHours(0, 0, 0, 0);
    today.setHours(0, 0, 0, 0);
    if (selectedDate < today) {

      const parsedDate = new Date(this.selectedDate);
      parsedDate.setDate(parsedDate.getDate() + 1);
      this.selectedDate = this.formatDate(parsedDate);
    }


    //this.selectedDate = event.target.value;
    this.targetDate = new Date(this.selectedDate);
    this.showTransactions(this.selectedDate);
  }

  decrementdate() {
    const parsedDate = new Date(this.selectedDate);
    parsedDate.setDate(parsedDate.getDate() - 1);
    this.selectedDate = this.formatDate(parsedDate);
    this.targetDate = new Date(this.selectedDate);
    this.showTransactions(this.selectedDate);
  }

  formatDate(date: Date): string {
    // Format the date to match the input type="date" format (YYYY-MM-DD)
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);
    return `${year}-${month}-${day}`;
  }

  dateChanged(event: any) {
    // Update selectedDate when input value changes
    this.selectedDate = event.target.value;
    this.targetDate = new Date(this.selectedDate);
    this.showTransactions(this.selectedDate);
  }

  showTransactions(selectedDate: string) {
    this.formActionService.showTransactions(selectedDate);
  }

}