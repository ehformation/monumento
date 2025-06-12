import { Component, Input, OnInit } from '@angular/core';
import { Monument } from '../monument.model';
import { MonumentService } from '../monument.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-monument-form',
  templateUrl: './monument-form.component.html',
  styles: [
  ]
})
export class MonumentFormComponent implements OnInit {
  @Input() monument: Monument|undefined
  countries: string[] = []
  isAddForm: boolean = false
  
  constructor (private monumentService: MonumentService, private router: Router) {}

  ngOnInit(): void {
    this.countries = this.monumentService.getAllCountry();
    this.isAddForm = this.router.url.includes("add")
    console.log(this.monument);
  }
  onSubmit(){
    this.router.navigate(['/monument', this.monument?.id ])
  }
}
