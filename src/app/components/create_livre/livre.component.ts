import { Component } from '@angular/core';
import { LivreService } from 'src/app/services/livre-service.service';
import { Livre } from 'src/app/models/Livre';
import { Router } from '@angular/router';
import { ListeLivresComponent } from '../liste-livres/liste-livres.component';

@Component({
  selector: 'addlivre',
  templateUrl: './livre.component.html',
  styleUrls: ['./livre.component.css']
})
export class LivreComponent {
  titre: string = '';
  auteur: string = '';
  livres: Livre[] = [];
  confirmationMessage: string = '';


  constructor(public livreService: LivreService, private router: Router) {  }

  ajouterLivre() {

    const livre = new Livre(this.titre, this.auteur);
    this.livreService.addBook(livre).subscribe(
      {complete: () =>
        {
          this.confirmationMessage = "Le livre a bien était ajouté"
          console.log("Le livre a bien était ajouté");
          this.livreService.updateLivre();
        },
        error: () =>
        {
          this.confirmationMessage = "ERREUR : Livre déjà existant dans la liste ou alors vous n'avez rien renseigné"
          console.log("ERREUR : Livre déjà existant dans la liste ou alors vous n'avez rien renseigné");
        }
      }
    )
  }

  afficherListeLivres() {
    this.router.navigateByUrl('/liste-livres');
  }
}
