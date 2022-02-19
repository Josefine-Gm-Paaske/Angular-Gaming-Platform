import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  currentMessage: string = "";
  messages: string[] = [];
  constructor() { }

  ngOnInit(): void {
  }

  sendMessage() {
    this.messages.push(this.currentMessage);
    this.currentMessage = "";
  }
}
