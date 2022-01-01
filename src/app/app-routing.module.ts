import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JoueursComponent } from './joueurs/joueurs.component';
import { AddJoueurComponent } from './add-joueur/add-joueur.component';
import { UpdateJoueurComponent } from './update-joueur/update-joueur.component';
import { RechercheParEquipeComponent } from './recherche-par-equipe/recherche-par-equipe.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { JoueurGuard } from './joueur.guard';



const routes: Routes = [
  {path: "joueurs", component : JoueursComponent},
  {path: "add-joueur", component : AddJoueurComponent, canActivate:[JoueurGuard]},
  {path: "updateJoueur/:id", component: UpdateJoueurComponent},
  {path: "rechercheParEquipe", component : RechercheParEquipeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'forbidden', component: ForbiddenComponent},
  {path: "", redirectTo: "joueurs", pathMatch: "full"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
