import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Message } from '../../../../models/message';
import { MessageDataService } from 'src/app/services/message-data.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  currentUser: string;
  userMessages: Observable<Message[]>;

  userMessage: Message;
  messageSelected = false;

  constructor(
    private route: ActivatedRoute,
    private messagaDataService: MessageDataService
  ) { }

  ngOnInit(): void {
    this.currentUser = this.route.snapshot.params.username;

    this.userMessages = this.messagaDataService.getUserMessages(this.currentUser);
  }

  showMessage(messageToShow: Message): void {
    this.userMessage = messageToShow;
    this.messageSelected = !this.messageSelected;

  }

}
