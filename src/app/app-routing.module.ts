import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListMonumentComponent } from './list-monument/list-monument.component';
import { DetailMonumentComponent } from './detail-monument/detail-monument.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'monument/:id', component: DetailMonumentComponent },
  { path: 'monuments', component: ListMonumentComponent },
  { path: '', redirectTo: 'monuments', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
