export class Livre {
  id?: number;
  titre: string;
  auteur: string;

  constructor(titre: string, auteur: string, id?: number) {
    if (id) {
      this.id = id;
    }
    this.titre = titre;
    this.auteur = auteur;
  }
}
