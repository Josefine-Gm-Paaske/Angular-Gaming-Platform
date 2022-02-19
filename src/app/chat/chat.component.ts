import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  currentMessage: string = "";
  messages: string[] = [];
  constructor(private chatService: ChatService) { }

  ngOnInit(): void {
  }

  sendMessage() {
    this.messages.push(this.currentMessage);
    this.currentMessage = "";
  }
}
