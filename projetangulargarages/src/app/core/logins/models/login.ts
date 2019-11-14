import { Role } from '../../interfaces/role';

export interface Login {
    
    id : number;
    nom: string;
    prenom: string;
    user: string;
    password: string;
    desactiveUser: boolean;
    desactiveAngular: boolean;
    roles: Role[];
}