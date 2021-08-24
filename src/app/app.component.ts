import { Component, ElementRef, ViewChild } from '@angular/core';
import {BehaviorSubject, of, Subscription} from 'rxjs';
import { filter, map, delay } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

   wallets: any[] = [
    {wallet: "MARIA123", name: "maria", eth: 0, btc: 2},
    {wallet: "JUAN123", name: "juan", eth: 5, btc: 0},
    {wallet: "LUCAS123", name: "lucas", eth: 6, btc: 3},
    {wallet: "MARCOS123", name: "marcos", eth: 0, btc: 2},
    {wallet: "PEDRO123", name: "pedro", eth: 1, btc: 0},
    {wallet: "JUANA123", name: "juana", eth: 10, btc: 12}
   ]; 

   transactions = [
    {date: "2019-09-07T15:50+00Z", from: "MARIA123", to:"JUANA123", quantity: 2, moneyType: "btc", mineType: "PoW", miner: 5},
    {date: "2019-09-07T15:50+00Z", from: "JUAN123", to: "PEDRO123", quantity: 2, moneyType: "eth", mineType: "PoS", miner: 21},
    {date: "2019-09-07T15:50+00Z", from: "LUCAS123", to: "MARCOS123", quantity: 2, moneyType: "btc", mineType: "PoW", miner: 5},
    {date: "2019-09-07T15:50+00Z", from: "MARCOS123", to: "LUCAS123", quantity: 2, moneyType: "eth", mineType: "PoS", miner: 10},
    {date: "2019-09-07T15:50+00Z", from: "PEDRO123", to: "JUAN123", quantity: 2, moneyType: "btc", mineType: "PoW", miner: 5},
    {date: "2019-09-07T15:50+00Z", from: "JUANA123", to: "MARIA123", quantity: 2, moneyType: "eth", mineType: "PoS", miner: 30},
    {date: "2019-09-07T15:50+00Z", from: "MARIA123", to: "JUANA123", quantity: 2, moneyType: "btc", mineType: "PoW", miner: 2},
    {date: "2019-09-07T15:50+00Z", from: "JUAN123", to: "PEDRO123", quantity: 2, moneyType: "eth", mineType: "PoS", miner: 15},
    {date: "2019-09-07T15:50+00Z", from: "LUCAS123", to: "MARCOS123", quantity: 2, moneyType: "btc", mineType: "PoW", miner: 3},
    {date: "2019-09-07T15:50+00Z", from: "MARCOS123", to: "LUCAS123", quantity: 2, moneyType: "eth", mineType: "PoS", miner: 5}
   ];


   getStatusTransactions():boolean{
     const auxTransactions:any[] = 
      this.transactions.filter(
  s => s.mineType === 'PoS' && s.miner < 20);
    return this.transactions.length === auxTransactions.length;  
   }


   getMoneyGlobalStatus(typeMoney:string): number{
     return this.wallets.reduce(
       (acc, value:any) => acc = acc + value[typeMoney], 0
     );
   }


   onMine(transaction:any, index :number){

    this.transactions.splice(index, 1);  

    const indexTO = 
    this.wallets.findIndex(w => w.wallet === transaction.to)
    const indexFROM = 
    this.wallets.findIndex(w => w.wallet === transaction.from)

    this.wallets[indexFROM][transaction.moneyType] = this.wallets[indexFROM][transaction.moneyType] - transaction.quantity;
    
    this.wallets[indexTO][transaction.moneyType] = this.wallets[indexTO][transaction.moneyType] + transaction.quantity;

   }

}
