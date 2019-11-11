import { Role } from './role';

export interface Utilisateur{
    id : number;
    nom: string;
    prenom: string;
    user: number;
    password: string;
    fonction: Role;
    
}