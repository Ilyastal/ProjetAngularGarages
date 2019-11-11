import { Client } from './client';
import { Utilisateur } from './utilisateur';
import { Priorite } from '../enums/priorite.enum';

export interface Fiche{
    id: number;
    description: string;
    dateCreation: Date;
    dateValidation: Date;
    validation: boolean;
    client: Client;
    utilisateur: Utilisateur;
    niveauPriorite: Priorite;
}