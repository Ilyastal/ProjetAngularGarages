import { Utilisateur } from './utilisateur';
import { Voiture } from './voiture';
import { Devis } from './devis';


export interface CommandeVoiture{
    id: number;
    dateCommande: string;
    dateReception: Date;
    quantite: number;
    dateCloture: Date ;
    utilisateur: Utilisateur;
    voiture: Voiture;
    devis: Devis;
}