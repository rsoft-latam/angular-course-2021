import { Component } from '@angular/core';
import {of} from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'angular2021';
  myStatus = 'my status';

  sw = true;

  color:string;

  tictock = of([1,2,3,4,5]);

  constructor(){

    // PERSON A
    this.tictock.pipe(
      map(s => s.join('-')),
      map(s => s + 'hola'),
    ).subscribe(v => {
      console.log('PERSON A VIDEO', v);
    });
    // PERSON B
    this.tictock.pipe(
      filter((v:any) => v[0]%2 === 1)
    ).subscribe(v => {
      console.log('PERSON B VIDEO', v);
    });
    // PERSON C
    this.tictock.subscribe(v => {
      console.log('PERSON C VIDEO', v);
    });

  }


  onAddVideo(){
    
  }

printDataRicardoComp(event:any){
  console.log('RICARDO COMP:', event);
}


printData(event){
  console.log('CHILD COMP SEND DATA: ', event);
}
  
}
