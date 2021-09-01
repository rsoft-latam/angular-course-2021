import { Injectable } from '@angular/core';

@Injectable()
export class Test1Service {

  constructor() {

  }

  getItems():number[] {
    return [1, 2, 3, 4, 5];
  }

}
