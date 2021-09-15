import { Component, OnInit } from '@angular/core';
import {PublicationService} from "../shared/services/publication.service";
import {HomeService} from "./home.service";
import {filter} from "rxjs/operators";

@Component({
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  constructor(private publicationService: PublicationService,
              private homeService: HomeService) { }

  ngOnInit(): void {

    this.homeService.currentLoad().pipe(filter(s => s === true))
      .subscribe(s => this.loadData())


this.loadData();
  }

  onShowMessage():void{
  }


  loadData(){
    this.publicationService.getAll().subscribe(res => {

      console.log('RES PUBLICATIONS', res);

    })
  }

}
