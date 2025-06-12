import { Component } from '@angular/core';
import { Monument } from '../monument.model';
import { Router } from '@angular/router';
import { MonumentService } from '../monument.service';

@Component({
  selector: 'app-list-monument',
  templateUrl: './list-monument.component.html',
  styles: [
  ]
})
export class ListMonumentComponent {
  monumentList: Monument[] = []
  monumentSelected: Monument|undefined

  constructor(private router: Router, private monumentService: MonumentService) {}

  ngOnInit(): void {
    this.monumentList = this.monumentService.getAllMonuments()
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
