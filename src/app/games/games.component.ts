import { Component, OnInit } from '@angular/core';
import { IGame } from '../models/IGame';
import { GAMES } from '../models/mock-games';
import { GameService } from '../game.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

  games: IGame[] = [];
  game = this.games[0];
  constructor(private gameService: GameService) { }

  ngOnInit(): void {
    this.getGames();
  }

  getGames(): void{
    this.gameService.getGames()
    .subscribe(games => this.games = games)
  }

  selectedGame?: IGame;
  onSelect(game: IGame): void {
    this.selectedGame = game;
  }
}
