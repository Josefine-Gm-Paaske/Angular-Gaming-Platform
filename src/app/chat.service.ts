import { Injectable } from '@angular/core';
import { HubConnectionBuilder } from '@microsoft/signalr';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private _hubConnection: any;

  constructor() { 
    this._hubConnection = new HubConnectionBuilder()
  .withUrl('https//localhost:5000/chathub')
  .build();

  this._hubConnection.on('ReceiveMessage', (message: any) => {
    console.log(message);
  });

  this._hubConnection.start()
  .then(() => console.log('connection started'))
  .catch((err: string) => console.log('error while establishing signalr connection: ' + err));
  }
}
