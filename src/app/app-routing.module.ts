import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LivreComponent } from './components/create_livre/livre.component';
import { ListeLivresComponent } from './components/liste-livres/liste-livres.component';

const routes: Routes = [
  { path: 'livre', component: LivreComponent },
  { path: 'liste-livres', component: ListeLivresComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
