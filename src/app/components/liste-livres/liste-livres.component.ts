import { Component } from '@angular/core';
import { LivreService } from 'src/app/services/livre-service.service';
import { Livre } from 'src/app/models/Livre';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-liste-livres',
  templateUrl: './liste-livres.component.html',
  styleUrls: ['./liste-livres.component.css']
})
export class ListeLivresComponent {
  livres: Livre[] = [];
  confirmationMessage: string = '';

  constructor(private livreService: LivreService)
  {
    //this.livres = this.livreService.livres;
  }

  ngOnInit() {
    this.livreService.getAllLivres().subscribe((data) => { this.livres = data });
}


  modifierLivre(livre: Livre) {
    const nouveauTitre = prompt('Nouveau titre :', livre.titre);
    const nouveauAuteur = prompt('Nouvel auteur :', livre.auteur);

    if (nouveauTitre && nouveauAuteur) {
      const livreModifie = new Livre( nouveauTitre, nouveauAuteur,livre.id!);
      this.livreService.modifierLivre(livreModifie).subscribe(
        (response) => {
          // Afficher un message de confirmation
          this.confirmationMessage = `Le livre ${livre.titre} a été modifié avec succès.`;

          // Actualiser la liste des livres
          this.livreService.updateLivre().subscribe((data) => {
            this.livres = data;
          });
        },
        (error: HttpErrorResponse) => {
          // Afficher un message d'erreur
          console.error(error);
          this.confirmationMessage = `Une erreur s'est produite lors de la modification du livre ${livre.titre}.`;
        }
      );
    }
  }




  supprimerLivre(livre: Livre) {
      // Appeler la méthode supprimerLivre() de votre service pour supprimer le livre côté backend
      this.livreService.supprimerLivre(livre.id!).subscribe(
        (response) => {
          // Afficher un message de confirmation
          this.livreService.updateLivre().subscribe((data) => {
            this.livres = data;
          });
                this.confirmationMessage = `Le livre ${livre.titre} a été supprimé avec succès.`;
        },
        (error: HttpErrorResponse) => {
          // Afficher un message d'erreur
          console.error(error);
          this.confirmationMessage = `ERREUR : Il semblerai que le livre ${livre.titre} soit déjà supprimé.`;
        }
      );
    }
  }






