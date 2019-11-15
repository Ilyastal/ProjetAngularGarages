import { Utilisateur } from './utilisateur';
import { Priorite } from '../enums/priorite.enum';
import { Fiche } from './fiche';
import { Etat } from '../enums/etat.enum';

export interface Tache{
    id: number;
    dateFinTache: Date;
    description: string;
    utilisateur: Utilisateur;
    niveauPriorite: string;
    etatTache: any;
    fiche: Fiche;
    cloture: boolean;
    dateCreation: Date;
}