import { Injectable } from '@angular/core';
import { MONUMENTS } from './monument/mock-monument-list';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const monuments = MONUMENTS
    return { monuments }
  }
}
