import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BorderCardDirective } from './border-card.directive';
import { CountryByColorPipe } from './country-by-color.pipe';
import { ListMonumentComponent } from './list-monument/list-monument.component';
import { DetailMonumentComponent } from './detail-monument/detail-monument.component';
import { RouterModule, Routes } from '@angular/router';
import { MonumentFormComponent } from './monument-form/monument-form.component';
import { FormsModule } from '@angular/forms';

const monumentRoutes: Routes = [
  { path: 'monument/:id', component: DetailMonumentComponent },
  { path: 'monument-form', component: MonumentFormComponent },
  { path: 'monuments', component: ListMonumentComponent },
]

@NgModule({
  declarations: [
    BorderCardDirective,
    CountryByColorPipe,
    ListMonumentComponent,
    DetailMonumentComponent,
    MonumentFormComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forRoot(monumentRoutes)

  ]
})
export class MonumentModule { }
