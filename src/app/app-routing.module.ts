import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListMonumentComponent } from './list-monument/list-monument.component';
import { DetailMonumentComponent } from './detail-monument/detail-monument.component';

const routes: Routes = [
  { path: 'monuments', component: ListMonumentComponent },
  { path: 'monument/:id', component: DetailMonumentComponent },
  { path: '', redirectTo: 'monuments', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
