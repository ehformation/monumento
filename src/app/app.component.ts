import { Component, OnInit } from '@angular/core';
import { MONUMENTS } from './mock-monument-list';
import { Monument } from './monument.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent implements OnInit {
  monumentList: Monument[] = MONUMENTS
  monumentSelected: Monument|undefined

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
}
