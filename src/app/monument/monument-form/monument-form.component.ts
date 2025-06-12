import { Component, OnInit } from '@angular/core';
import { Monument } from '../monument.model';

@Component({
  selector: 'app-monument-form',
  templateUrl: './monument-form.component.html',
  styles: [
  ]
})
export class MonumentFormComponent implements OnInit {
  monument: Monument = {
    id: 1,
    name: 'YOYO',
    country: '',
    city: '',
    buildYear: 1,
    picture: "",
    description: "",
    created: new Date()
  }
  isAddForm = true

  constructor () {}

  ngOnInit(): void {
    console.log(this.monument?.name)
  }
  onSubmit(){

  }
}
