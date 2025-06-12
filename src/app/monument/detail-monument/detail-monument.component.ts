import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MONUMENTS } from '../mock-monument-list';
import { Monument } from '../monument.model';
import { MonumentService } from '../monument.service';

@Component({
  selector: 'app-detail-monument',
  templateUrl: './detail-monument.component.html',
  styles: [
  ]
})
export class DetailMonumentComponent implements OnInit {
  monumentList: Monument[] = MONUMENTS
  monument: Monument|undefined

  constructor(private route: ActivatedRoute, private router: Router,private monumentService: MonumentService) {}

  ngOnInit(): void {

    const monumentId: string|null = this.route.snapshot.paramMap.get('id')
    if(monumentId){
      this.monument = this.monumentService.getMonumentById(+monumentId)
    }

    console.log(monumentId);
  }

  goToMonumentList(){
    this.router.navigate(['/monuments']);
  }

  goToMonumentEdit(){
    this.router.navigate(['edit/monument', this.monument?.id]);
  }
}
