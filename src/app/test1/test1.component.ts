import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'ricardo-comp',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.scss']
})
export class Test1Component {
  @Input('status') statusTest: string = 'working';

  @Output('onSendData') sendData = new EventEmitter(null);

  constructor() {}

  onClickTest(event: any) {
    console.log('EVENT CLICK:', event);

    this.sendData.emit({
      name: 'ricardo',
      status: 'busy'
    });
  }
}
