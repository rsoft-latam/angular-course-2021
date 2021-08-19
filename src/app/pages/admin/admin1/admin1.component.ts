import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-admin1',
  templateUrl: './admin1.component.html',
  styleUrls: ['./admin1.component.scss']
})
export class Admin1Component implements OnInit {

  name = 'ricardo';
  auxJSON = {name: 'maria', lastName: 'gutierrez'};

  auxObs$ = new BehaviorSubject<number[]>([1,2,3]);

  constructor() { }

  ngOnInit() {
  }

  onAdd(){
    const aux = this.auxObs$.getValue();
    const aux1 = [4,5].concat(aux);
    this.auxObs$.next(aux1);
  }


}