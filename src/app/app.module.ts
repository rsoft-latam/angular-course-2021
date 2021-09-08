import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {WalletComponent} from './wallet/wallet.component';
import {TransactionComponent} from './transaction/transaction.component';
import {TransactionService} from "./services/transaction.service";
import {WalletService} from "./services/wallet.service";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    WalletComponent,
    TransactionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    TransactionService,
    WalletService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
