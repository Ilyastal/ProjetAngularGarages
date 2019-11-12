import { Fonction } from '../enums/fonction.enum';

export interface Role{
    id : number;
    fonction: Fonction | string;
    
}
