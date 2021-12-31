import { Component, OnInit } from '@angular/core';
import { Joueur } from '../model/joueur.model';
import { JoueurService } from '../services/joueur.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Equipe } from "../model/equipe.model";



@Component({
  selector: 'app-add-joueur',
  templateUrl: './add-joueur.component.html'
})
export class AddJoueurComponent implements OnInit {


  newJoueur = new Joueur();
  equipe = new Equipe();
  equipes : Equipe[];

  newEquipe : Equipe;
  idEquipe  : number  ;

  message : string ;
  constructor(private activatedRoute: ActivatedRoute,
    private joueurService: JoueurService,
                      private router :Router) { }

  ngOnInit(): void {

    this.joueurService.listeEquipes().subscribe(
      (equipes) => {
        console.log(equipes);
        this.equipes = equipes;
      },
      (error) => {
        console.log(error);
      });
  }

  addJoueur(){
    this.newEquipe = this.equipes.find(eq => eq.idEquipe == this.idEquipe);
    this.newJoueur.equipe =  this.newEquipe;
    if (this.newJoueur.equipe != undefined){
    this.joueurService.ajouterJoueur(this.newJoueur).subscribe(joue => {
      this.router.navigate(['joueurs']).then(() => {
        window.location.reload();
        });
      });
      }
     else
        console.log("erreur");
    }

}
