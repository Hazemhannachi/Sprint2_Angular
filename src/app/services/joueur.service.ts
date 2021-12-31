import { Injectable } from '@angular/core';
import { Joueur } from '../model/joueur.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Equipe } from "../model/equipe.model";


const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
  };

@Injectable({
providedIn: 'root'
})
export class JoueurService {
  apiURL: string = 'http://localhost:8082/EquJoueur/api';
  apiURLEquipe: string ='http://localhost:8082/EquJoueur/equipes';
  EquipesapiURL: string = 'http://localhost:8082/EquJoueur/api/equipeJoueur';




  joueursRecherche : Joueur[];
  constructor(private http : HttpClient) {

}




  listeJoueurs(): Observable<Joueur[]>{
    return this.http.get<Joueur[]>(this.apiURL);
  }


  ajouterJoueur( joue: Joueur):Observable<Joueur>{
    return this.http.post<Joueur>(this.apiURL, joue, httpOptions);
  }


  supprimerJoueur(id : number) {
    const url = `${this.apiURL}/${id}`;
    return this.http.delete(url, httpOptions);
  }



  consulterJoueur(id: number): Observable<Joueur> {
    const url = `${this.apiURL}/${id}`;
    return this.http.get<Joueur>(url);
  }


  updateJoueur(joue :Joueur) : Observable<Joueur>
  {
  return this.http.put<Joueur>(this.apiURL, joue, httpOptions);
  }


  listeEquipes(): Observable<Equipe[]> {
      return this.http.get<Equipe[]>(this.apiURLEquipe, httpOptions);
    }

  consulterEquipe(id: number): Observable <Equipe[]> {
        const url = `${this.apiURLEquipe}/${id}`;
        return this.http.get<Equipe[]>(url, httpOptions);
      }

  rechercherParEquipe(IdEquipe:number): Observable<Joueur[]>{
        const url = `${this.EquipesapiURL}/${IdEquipe}`;
        return this.http.get<Joueur[]>(url, httpOptions);
      }

  }
