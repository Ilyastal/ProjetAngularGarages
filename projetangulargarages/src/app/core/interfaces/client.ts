import { Genre } from '../enums/genre.enum';

export interface Client{
    id : number;
    nom: string;
    prenom: string;
    adresse: string;
    codePostal: string;
    ville: string;
    telephone: string;
    sexe: Genre;
}