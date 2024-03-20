import { EventEmitter, Injectable, Output } from "@angular/core";
import { Transaction } from "./model/transaction.model";

import * as moment from 'moment';

@Injectable({
    providedIn: "root"
})
export class formActionService{

    @Output() displayFormEvent = new EventEmitter<boolean>();

    @Output() updateTansList = new EventEmitter<Transaction[]>();
    
    displayForm:any = false;

    constructor() { }

    ngOnInIt(){

    }

    public transactions: Transaction[] = [
        new Transaction(
          new Date("2024-03-15"),
          'Expense',
          'Food',
          'Cash',
          '14000',
          ''
          ),
        new Transaction(
          new Date(),
          'Expense',
          'Grocery',
          'Bank Account',
          '250',
          ''
        ),
        new Transaction(
          new Date("2024-03-16"),
          'Expense',
          'Rent',
          'UPI',
          '8200',
          'Note'
          )
      ];

    displayTriggered(){
        this.displayForm = !this.displayForm;
        this.displayFormEvent.emit(this.displayForm);
    }

    addTransaction(transAdd: Transaction){
        this.transactions.push(transAdd);
        console.log(this.transactions);
        this.updateTansList.emit(this.transactions);
        this.displayTriggered();
    }

    deleteTransaction(pos: number){
        this.transactions.splice(pos, 1);
    }

    showTransactions(selectedDate: string){
      const currentDate: Date = new Date(selectedDate);
      

      const filteredTransactions = this.transactions.filter(transaction => {
        const transactionDate = transaction.dateOfTransaction;
        return (
            transactionDate.getDate() === currentDate.getDate() &&
            transactionDate.getMonth() === currentDate.getMonth() &&
            transactionDate.getFullYear() === currentDate.getFullYear()
        );
    });

    this.updateTansList.emit(filteredTransactions);

    }




    
}
