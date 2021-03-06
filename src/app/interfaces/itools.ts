import {User} from '../model/user';

export interface ITools {
    '_id': string;
    'nazwa': string;
    'opis': string;
    'data_prod': Date;
    'producent': string;
    'wlasciciel': User;
    'uwagi': string;
    'archiwum': boolean;
}

