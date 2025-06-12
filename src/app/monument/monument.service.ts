import { Injectable } from '@angular/core';
import { MONUMENTS } from './mock-monument-list';
import { Monument } from './monument.model';

@Injectable({
  providedIn: 'root'
})
export class MonumentService {

  constructor() { }

  getAllMonuments(): Monument[] {
    return MONUMENTS;
  }

  getMonumentById(monumentId: number): Monument|undefined {
    return MONUMENTS.find( monument => monument.id == +monumentId);
  }

  getAllCountry() {
    return [
      'France',
      'États-Unis',
      'Italie',
      'Royaume-Uni',
      'Inde',
      'Brésil',
      'Égypte',
      'Pérou',
      'Grèce'
    ]
  }
}
