import { Component, OnInit } from '@angular/core';
import {PublicationService} from "../shared/services/publication.service";

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private publicationService: PublicationService) { }

  ngOnInit(): void {

    this.publicationService.getAll().subscribe(res => {

      console.log('RES PUBLICATIONS', res);

    })

  }

  onShowMessage():void{
  }

}
