import { Utilisateur } from './utilisateur';
import { Client } from './client';

import { Voiture } from './voiture';

export interface Devis{
    id : number;
    dateDevis: Date;
    description: string;
    validationDevis: boolean;
    utilisateur: Utilisateur;
    prixHt: number;
    tva: number;
    quantite: number;
    client: Client;
    voiture: Voiture | any;
    refusDevis: boolean;
    annulationDevis: boolean
    
}