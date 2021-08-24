import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent implements OnInit {


  @Input() data: any;

  constructor() { }

  ngOnInit() {
  }

}