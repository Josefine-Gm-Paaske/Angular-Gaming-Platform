import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  //Variables 
  currentMessage: string = "";
  messages: string[] = [];
  isVisible: boolean = true;

  constructor(private chatService: ChatService) { }

  ngOnInit(): void {
  }

  sendMessage() {
    this.messages.push(this.currentMessage);
    this.currentMessage = "";
  }
}
