import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JoueursComponent } from './joueurs/joueurs.component';
import { AddJoueurComponent } from './add-joueur/add-joueur.component';
import { UpdateJoueurComponent } from './update-joueur/update-joueur.component';
import { RechercheParEquipeComponent } from './recherche-par-equipe/recherche-par-equipe.component';



const routes: Routes = [
  {path: "joueurs", component : JoueursComponent},
  {path: "add-joueur", component : AddJoueurComponent},
  {path: "updateJoueur/:id", component: UpdateJoueurComponent},
  {path: "rechercheParEquipe", component : RechercheParEquipeComponent},
  {path: "", redirectTo: "joueurs", pathMatch: "full"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
