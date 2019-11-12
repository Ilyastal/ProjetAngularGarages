import { Role } from './role';

export interface Utilisateur{
    id : number;
    nom: string;
    prenom: string;
    user: string;
    password: string;
    desactiveUser: boolean;
    desactiveAngular: boolean;
    roles: Role[];
    
}