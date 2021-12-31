import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Equipe } from '../model/equipe.model';
import { Joueur } from '../model/joueur.model';
import { JoueurService } from '../services/joueur.service';

@Component({
  selector: 'app-recherche-par-equipe',
  templateUrl: './recherche-par-equipe.component.html',
  styles: [
  ]
})
export class RechercheParEquipeComponent implements OnInit {

  joueurs : Joueur[];
  equipes : Equipe[];
  idEquipe : number;
  constructor(private joueurService: JoueurService, private router: Router) { }

  ngOnInit(): void {
    this.joueurService.listeJoueurs().subscribe(
      (joueurs) => {
        console.log(joueurs);
        this.joueurs = joueurs;
      },
      (error) => {
        console.log(error);
      }
    );
    this.joueurService.listeEquipes().subscribe(
      (equipes) => {
        console.log(equipes);
        this.equipes = equipes;
      },
      (error) => {
        console.log(error);
      });
  }

  onChange(){
    console.log('this.IdEquipe',this.idEquipe );
    this.joueurService.rechercherParEquipe(this.idEquipe).subscribe(res => {
      this.joueurs= res;
    });
    //this.joueurs.filter(element => element.equipe.idEquipe == this.idEquipe)
  }
}
