import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.scss']
})
export class Test2Component {
  @Input() name: string;
  @Input() lastName: string;
  @Output() onSendData = new EventEmitter(null);


  myvar1 = 4;
  myvar2 = 5;

  constructor() {}

  onShowData(){
    this.onSendData.emit('general data ' + this.name + ' ' + this.lastName);
  }

  test0(event){
    console.log('event click:', event);
    console.log('SUMA: ', this.myvar1 + this.myvar2);
  }

  test1(event){
    console.log('event blur:', event);
  }

  test3(event){
    console.log('event double click:', event);
  }

}
