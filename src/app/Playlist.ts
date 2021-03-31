import {Morceau} from './Morceau';
import {Utilisateur} from './Utilisateur';

export class Playlist{
  idPl: string;
  nomPl: string;
  stylePl: string;
  nbClic: number;
  listeContributeur: Utilisateur[];
  nomCreateur: string;
  listeMorceaux: Morceau[];
}
