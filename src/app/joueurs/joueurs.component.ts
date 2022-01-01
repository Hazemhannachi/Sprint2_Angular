import { Component, OnInit } from '@angular/core';
import { Joueur } from '../model/joueur.model';
import { JoueurService } from '../services/joueur.service';
import { Router } from '@angular/router';
import { AuthentificationService } from '../services/authentification.service';


@Component({
  selector: 'app-joueurs',
  templateUrl: './joueurs.component.html'
})
export class JoueursComponent implements OnInit {


  joueurs : Joueur[];
  constructor(private joueurService: JoueurService,
               private router :Router,
               public authService: AuthentificationService) {

   // this.joueurs = joueurService.listeJoueurs();



  }

  ngOnInit(): void {
    this.joueurService.listeJoueurs().subscribe(joue => {
      console.log(joue);
      this.joueurs = joue;
      });
  }



supprimerJoueur(joue: Joueur)
  {
    let conf = confirm("Etes-vous sûr ?");
    if (conf)
    this.joueurService.supprimerJoueur(joue.idJoueur).subscribe(() => {
      console.log("Joueur supprimé");
      this.SuprimerJoueurDuTableau(joue);

  });
}
SuprimerJoueurDuTableau(joue: Joueur) {
  this.joueurs.forEach((cur, index) => {
  if(joue.idJoueur=== cur.idJoueur) {
  this.joueurs.splice(index, 1);
  }
  });
  }
}
