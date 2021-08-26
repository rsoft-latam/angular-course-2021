import { Component, ElementRef, ViewChild } from '@angular/core';
import {BehaviorSubject, of, Subscription} from 'rxjs';
import { filter, map, delay } from 'rxjs/operators';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  id:number = 3;
  data = [1,2,3,4,5,6,7,8,9];

  constructor(private router: Router){
    this.pure(2,3);
    this.pure(10,2);
    this.pure(5,5);


    this.impure(2,3);
    this.impure(10,2);
    this.impure(5,5);
  }


  pure(a:number, b:number){
    console.log(a + b)
    return a + b;
  }

  impure(a:number, b:number){
    const aux = Math.random();
    console.log( a + b + aux)
    return a + b + aux;
  }

  onGoView2FromTS():void{
    this.router.navigate(
      ['view2', this.id, 'sub', 33333],
      {queryParams: {name: 'maria', lastName: 'gutierrez'}}
    )
  }


}
