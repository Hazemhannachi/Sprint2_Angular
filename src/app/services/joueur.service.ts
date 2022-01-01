import { Injectable } from '@angular/core';
import { Joueur } from '../model/joueur.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Equipe } from '../model/equipe.model';
import { AuthentificationService } from './authentification.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class JoueurService {
  apiURL: string = 'http://localhost:8082/EquJoueur/api';
  apiURLEquipe: string = 'http://localhost:8082/EquJoueur/equipes';
  EquipesapiURL: string = 'http://localhost:8082/EquJoueur/api/equipeJoueur';

  joueursRecherche: Joueur[];
  constructor(
    private http: HttpClient,
    private authService: AuthentificationService
  ) {}

  listeJoueurs(): Observable<Joueur[]> {
    let jwt = this.authService.getToken();
    jwt = 'Bearer ' + jwt;
    let httpHeaders = new HttpHeaders({ Authorization: jwt });
    return this.http.get<Joueur[]>(this.apiURL, { headers: httpHeaders });
  }

  ajouterJoueur(joue: Joueur): Observable<Joueur> {
    let jwt = this.authService.getToken();
    jwt = 'Bearer ' + jwt;
    let httpHeaders = new HttpHeaders({ Authorization: jwt });
    return this.http.post<Joueur>(this.apiURL, joue, { headers: httpHeaders });
  }

  supprimerJoueur(id: number) {
    let jwt = this.authService.getToken();
    jwt = 'Bearer ' + jwt;
    let httpHeaders = new HttpHeaders({ Authorization: jwt });
    const url = `${this.apiURL}/${id}`;
    return this.http.delete(url, { headers: httpHeaders });
  }

  consulterJoueur(id: number): Observable<Joueur> {
    let jwt = this.authService.getToken();
    jwt = 'Bearer ' + jwt;
    let httpHeaders = new HttpHeaders({ Authorization: jwt });
    const url = `${this.apiURL}/${id}`;
    return this.http.get<Joueur>(url, { headers: httpHeaders });
  }

  updateJoueur(joue: Joueur): Observable<Joueur> {
    let jwt = this.authService.getToken();
    jwt = 'Bearer ' + jwt;
    let httpHeaders = new HttpHeaders({ Authorization: jwt });
    return this.http.put<Joueur>(this.apiURL, joue, { headers: httpHeaders });
  }

  listeEquipes(): Observable<Equipe[]> {
    return this.http.get<Equipe[]>(this.apiURLEquipe, httpOptions);
  }

  consulterEquipe(id: number): Observable<Equipe[]> {
    const url = `${this.apiURLEquipe}/${id}`;
    return this.http.get<Equipe[]>(url, httpOptions);
  }

  rechercherParEquipe(IdEquipe: number): Observable<Joueur[]> {
    const url = `${this.EquipesapiURL}/${IdEquipe}`;
    return this.http.get<Joueur[]>(url, httpOptions);
  }
}
