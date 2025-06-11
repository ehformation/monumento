import { Component } from '@angular/core';
import { MONUMENTS } from '../mock-monument-list';
import { Monument } from '../monument.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-monument',
  templateUrl: './list-monument.component.html',
  styles: [
  ]
})
export class ListMonumentComponent {
  monumentList: Monument[] = MONUMENTS
  monumentSelected: Monument|undefined

  constructor(private router: Router) {}

  ngOnInit(): void {
    console.table(this.monumentList);
  }

  selectMonument(monumentId: string) {

    const searchMonument: Monument|undefined = this.monumentList.find( monument => monument.id == +monumentId)
    if(searchMonument) {
      this.monumentSelected = searchMonument
    }
    console.log(`Le monument n'existe pas`);
  }

  goToMonument(monument: Monument) {
    this.router.navigate(['/monument', monument.id])
  }
}
