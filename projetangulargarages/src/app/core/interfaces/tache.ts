import { Utilisateur } from './utilisateur';
import { Priorite } from '../enums/priorite.enum';
import { Fiche } from './fiche';

export interface Tache{
    id: number;
    dateFinTache: Date;
    description: string;
    utilisateur: Utilisateur;
    niveauPriorite: Priorite;
    etatTache: boolean;
    fiche: Fiche;
    cloture: boolean;
    dateCreation: Date;
}