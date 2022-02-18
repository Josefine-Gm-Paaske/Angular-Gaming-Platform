import { Injectable } from '@angular/core';
import { IGame } from './models/IGame';
import { GAMES } from './models/mock-games';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor() { }

  getGames(): Observable <IGame[]>{
    const games = of(GAMES)
    return games;
  }
}
