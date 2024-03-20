export class Transaction {

  public dateOfTransaction: Date;
  public transactionType: string;
  public purchase: string;
  public account: string;
  public amount: string;
  public note: string;

  constructor(dateOfTrans: Date, transactionType: string, purchaseSelected: string, accountUsed: string, amountTrans: string, note: string) {
    this.dateOfTransaction = dateOfTrans;
    this.transactionType = transactionType
    this.purchase = purchaseSelected;
    this.account = accountUsed;
    this.amount = amountTrans;
    this.note = note;
  }

}
