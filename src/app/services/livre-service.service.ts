import { Injectable } from '@angular/core';
import { Livre } from '../models/Livre';
import { Router } from '@angular/router';
import {HttpClient} from '@angular/common/http'
import { HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LivreService {
  livres: Livre[]=[];
  API_URL="http://localhost:8081"
  msg = ""
  public confirmationMessage: string = '';
  constructor(private router: Router,private http: HttpClient) {}


  addBook(livre: Livre){
    return this.http.post<Livre>(this.API_URL+"/ajouter", livre);
 }


 modifierLivre(livre: Livre): Observable<any> {
  const url = `${this.API_URL}/modifier/${livre.id}?nouveauTitre=${livre.titre}&nouveauAuteur=${livre.auteur}`;
  return this.http.put(url, livre);
}






  updateLivre(): Observable<any> {
    this.getAllLivres().subscribe((data) => {
      this.livres = data;
    });
    return this.getAllLivres();
  }

  getAllLivres(){
    return this.http.get<Livre[]>(this.API_URL+"/getAllLivres");
  }

  afficherListeLivres() {
    this.router.navigateByUrl('/liste-livres');
  }

  supprimerLivre(id: number): Observable<any> {
    return this.http.delete<Livre>(this.API_URL+"/supprimer/"+id)

  }


}
