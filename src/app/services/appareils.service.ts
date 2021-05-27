import { Injectable } from '@angular/core';
import { Appareil } from '../models/appareil.model';

@Injectable({
  providedIn: 'root'
})
export class AppareilsService {

  appareils: Appareil[] = [
    {
      id: '1',
      nom: 'Television',
      statue: 'allume',
      dateAdd: new Date()
    },
    {
      id: '2',
      nom: 'Machine a lave',
      statue: 'allume',
      dateAdd: new Date()
    }
  ];

  constructor() { }

  getAllAppareils(){
    //retourne une copie de la liste des donnees
    return [...this.appareils];
  }

  getAppareil(id: string){
    return {
      ...this.appareils.find( appareil => appareil.id === id)
    };
  }
}
