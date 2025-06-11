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

  ngOnInit(): void {
    console.table(this.monumentList);
    this.selectMonument(this.monumentList[1]);
  }

  selectMonument(monument: Monument) {
    console.log(`Vous avez cliqué sur le monument ${monument.name}`);
  }
}
