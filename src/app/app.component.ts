import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test';

  wallets:any[] = [
    {wallet: "MARIA123", name: "maria", eth: 0, btc: 2},
    {wallet: "JUAN123", name: "juan", eth: 5, btc: 0},
    {wallet: "LUCAS123", name: "lucas", eth: 6, btc: 3},
    {wallet: "MARCOS123", name: "marcos", eth: 0, btc: 2},
    {wallet: "PEDRO123", name: "pedro", eth: 1, btc: 0},
    {wallet: "JUANA123", name: "juana", eth: 10, btc: 12}
  ];

  transactions:any[] = [
    {date: "2021-12-07T18:30:00.000Z", from: "MARIA123", to:"JUANA123", quantity: 2, moneyType: "btc", mineType: "PoW", miner: 5},
    {date: "2021-11-01T18:30:00.000Z", from: "JUAN123", to: "PEDRO123", quantity: 2, moneyType: "eth", mineType: "PoS", miner: 21},
    {date: "2021-09-10T18:30:00.000Z", from: "LUCAS123", to: "MARCOS123", quantity: 2, moneyType: "btc", mineType: "PoW", miner: 5},
    {date: "2021-05-01T18:30:00.000Z", from: "MARCOS123", to: "LUCAS123", quantity: 2, moneyType: "eth", mineType: "PoS", miner: 10},
    {date: "2020-07-07T18:30:00.000Z", from: "PEDRO123", to: "JUAN123", quantity: 2, moneyType: "btc", mineType: "PoW", miner: 5},
    {date: "2019-09-23T18:30:00.000Z", from: "JUANA123", to: "MARIA123", quantity: 2, moneyType: "eth", mineType: "PoS", miner: 30},
    {date: "2018-05-07T18:30:00.000Z", from: "MARIA123", to: "JUANA123", quantity: 2, moneyType: "btc", mineType: "PoW", miner: 2},
    {date: "2017-08-28T18:30:00.000Z", from: "JUAN123", to: "PEDRO123", quantity: 2, moneyType: "eth", mineType: "PoS", miner: 15},
    {date: "2016-09-07T18:30:00.000Z", from: "LUCAS123", to: "MARCOS123", quantity: 2, moneyType: "btc", mineType: "PoW", miner: 3},
    {date: "2015-01-12T18:30:00.000Z", from: "MARCOS123", to: "LUCAS123", quantity: 2, moneyType: "eth", mineType: "PoS", miner: 5}
  ]



  constructor() {


  }

  onMine(transaction:any, i:number):void{

    const indexFROM = this.wallets.findIndex(w => w.wallet === transaction.from);
    const indexTO = this.wallets.findIndex(w => w.wallet === transaction.to);

    this.wallets[indexFROM][transaction.moneyType] =
      this.wallets[indexFROM][transaction.moneyType] -
      transaction.quantity;

    this.wallets[indexTO][transaction.moneyType] =
      this.wallets[indexTO][transaction.moneyType] +
      transaction.quantity;

    this.transactions.splice(i,1);

  }

  getTransactionsStatus():boolean{
    const aux = this.transactions.filter(
      t => t.mineType === 'PoS' && t.miner < 20);

    return this.transactions.length === aux.length;
  }


  getTotalCoin(type:string){
    return this.wallets.reduce((acc, value) =>
    acc + (value[type] > 0 ? value[type] : 0)
    , 0);
  }

}
