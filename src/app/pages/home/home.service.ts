import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  load$ = new BehaviorSubject<boolean>(false)

  constructor() {

  }

  currentLoad(){
    return this.load$.asObservable();
  }

  setLoad(data:boolean){
    this.load$.next(data);
  }



}
