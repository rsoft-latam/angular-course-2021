import {Component, OnInit} from '@angular/core';
import {WalletService} from "./services/wallet.service";
import {TransactionService} from "./services/transaction.service";
import {forkJoin} from "rxjs";
import {exhaustMap} from "rxjs/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  wallets: any[] = [];
  transactions: any[] = []

  constructor(private walletService: WalletService,
              private transactionService: TransactionService) {
  }

  ngOnInit(): void {
    this.loadWallets();
    this.loadTransactions();
  }

  onMine(transaction: any): void {
    const walletFROM = this.wallets.find(w => w.wallet === transaction.from);
    const walletTO = this.wallets.find(w => w.wallet === transaction.to);

    walletFROM[transaction.moneyType] = walletFROM[transaction.moneyType] - transaction.quantity;
    walletTO[transaction.moneyType] = walletTO[transaction.moneyType] + transaction.quantity;

    this.transactionService.delete(transaction.id).subscribe(() => this.loadTransactions());
    this.walletService.update(walletFROM.id, walletFROM).subscribe(res => this.loadWallets());
    this.walletService.update(walletTO.id, walletTO).subscribe(res => this.loadWallets());

    /*forkJoin(
      this.walletService.update(walletFROM.id, walletFROM),
      this.walletService.update(walletTO.id, walletTO)
    ).pipe(
      exhaustMap(res => {
        console.log('RES EXHA', res);
        return this.transactionService.delete(transaction.id)
      })
    ).subscribe(res => {
      console.log('FORK JOIN', res)
      //this.transactionService.delete(transaction.id).subscribe(() => this.loadTransactions())
    })*/

  }

  getTransactionsStatus(): boolean {
    const aux = this.transactions.filter(t => t.mineType === 'PoS' && t.miner < 20);
    return this.transactions.length === aux.length;
  }

  getTotalCoin(type: string): number {
    return this.wallets.reduce((acc, value) => acc + (value[type] > 0 ? value[type] : 0), 0);
  }

  loadTransactions(): void {
    this.transactionService.getAll().subscribe(res =>
      this.transactions = Object.entries(res).map((s: any) => ({id: s[0], ...s[1]}))
    );
  }

  loadWallets(): void {
    this.walletService.getAll().subscribe(res =>
      this.wallets = Object.entries(res).map((s: any) => ({id: s[0], ...s[1]}))
    );
  }

}
