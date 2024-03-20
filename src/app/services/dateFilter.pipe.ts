import { Pipe, PipeTransform } from '@angular/core';
import { Transaction } from "../model/transaction.model";


@Pipe({
  name: 'dateFilter'
})
export class DateFilterPipe implements PipeTransform {
  transform(transactions: Transaction[], targetDate: Date): Transaction[] {
    if (!transactions || !targetDate) {
      return transactions;
    }

    return transactions.filter(transaction => {
      const transactionDate = new Date(transaction.dateOfTransaction);
      return (
        transactionDate.getDate() === targetDate.getDate() &&
        transactionDate.getMonth() === targetDate.getMonth() &&
        transactionDate.getFullYear() === targetDate.getFullYear()
      );
    });
  }
}
