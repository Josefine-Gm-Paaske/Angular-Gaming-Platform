import { Component, OnInit, Input } from '@angular/core';
import { IGame } from '../models/IGame';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.css']
})
export class GameDetailComponent implements OnInit {
  @Input() game?: IGame;
  
  constructor() { }

  ngOnInit(): void {
  }

}
