import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MONUMENTS } from '../mock-monument-list';
import { Monument } from '../monument.model';

@Component({
  selector: 'app-detail-monument',
  templateUrl: './detail-monument.component.html',
  styles: [
  ]
})
export class DetailMonumentComponent implements OnInit {
  monumentList: Monument[] = MONUMENTS
  monument: Monument|undefined

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {

    const monumentId: string|null = this.route.snapshot.paramMap.get('id')
    if(monumentId){
      this.monument = this.monumentList.find( monument => monument.id == +monumentId)
    }

    console.log(monumentId);
  }
}
