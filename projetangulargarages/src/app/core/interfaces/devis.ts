import { Utilisateur } from './utilisateur';
import { Client } from './client';

import { Voiture } from './voiture';

export interface Devis{
    id : number;
    dateDevis: Date;
    description: string;
    validationDevis: boolean;
    utilisateur: Utilisateur;
    prixHT: number;
    tva: number;
    quantite: number;
    client: Client;
    voiture: Voiture;
    refusDevis: boolean;
    annulationDevis: boolean
    
}