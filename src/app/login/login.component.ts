import { Component, OnInit } from '@angular/core';
import {Test1Service} from "./services/test1.service";
import {SingletonService} from "./services/singleton.service";
import {PublicationService} from "./services/publication.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  name = new FormControl('');


  formReactive: FormGroup;

  constructor(private test1Service: Test1Service,
              private formBuilder: FormBuilder,
              private singletonService: SingletonService,
              private publicationService: PublicationService) {
    console.log(this.test1Service.getItems())

    this.formReactive = this.formBuilder.group({
      name: '',
      lastName: ['', [Validators.required]],
      date: ''
    });

  }

  ngOnInit(): void {

    this.formReactive.valueChanges.subscribe(res => {
      console.log('FORM REACTOVE', res);
    })

    this.name.valueChanges.subscribe(res => {
      console.log('CHANGES', res)
    });

    this.publicationService.getAll()
      .subscribe(res => {
        console.log('RESPONSE: ', res);
      });

  }

  setMessage() {
    this.singletonService.setMessage('HI FROM LOGIN');
  }

  update() {


    this.publicationService.update('p0001',{
      "date": "17/82/2021",
      "description": "update from frontend",
      "idUser": 2,
      "imageUrl": "http://fitebase/img.jpg",
      "userPhotoUrl": "http://fitebase/user1.jpg"
    } ).subscribe(
      res => console.log(res))
  }

  create(){

    this.publicationService.create({
      "date": "17/82/2021",
      "description": "soy nuevo",
      "idUser": 2,
      "imageUrl": "http://fitebase/img.jpg",
      "userPhotoUrl": "http://fitebase/user1.jpg"
    } ).subscribe(
      res => console.log(res))

  }

  delete(){
    this.publicationService.delete('p0002').subscribe(
      res => console.log(res))
  }


  patch() {
    this.publicationService.patch('p0001',{
      "description": "update from frontend patch",
    } ).subscribe(
      res => console.log(res))
  }

  onSubmitTemplate(values:any){
    console.log('VALUES: ', values)
  }


  onShow(){
    console.log(this.name.value)
  }

  onShowAll(){
    console.log('DDDDD', this.formReactive.value)
  }

}
