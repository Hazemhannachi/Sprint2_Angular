import { Component, OnInit } from '@angular/core';
import { Joueur } from '../model/joueur.model';
import { ActivatedRoute,Router } from '@angular/router';
import { JoueurService } from '../services/joueur.service';

@Component({
  selector: 'app-update-joueur',
  templateUrl: './update-joueur.component.html',
  styles: [
  ]
})
export class UpdateJoueurComponent implements OnInit {

  currentJoueur = new Joueur();

  constructor(private activatedRoute: ActivatedRoute,
              private router :Router,
              private joueurService: JoueurService) { }

  ngOnInit(): void {
this.joueurService.consulterJoueur(this.activatedRoute.snapshot.params.id).
 subscribe( joue =>{ this.currentJoueur = joue; })
 }


updateJoueur() {
  this.joueurService.updateJoueur(this.currentJoueur).subscribe(joue => {
  this.router.navigate(['joueurs']);
  },(error) => { alert("Problème lors de la modification !"); }
  );
  }
}
