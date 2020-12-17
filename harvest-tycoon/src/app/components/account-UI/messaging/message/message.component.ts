import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { Message } from '../../../../models/message';
import { User } from '../../../../models/user';
import { CreateMessageComponent } from '../create-message/create-message.component';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
  currentUser: string;
  @Input() message: Message;

  constructor(
    public dialog: MatDialog,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.currentUser = this.route.snapshot.params.username;
  }


  openDialog(): void {
    this.dialog.open(CreateMessageComponent, {
      data: {
        user: `${this.message.from}`,
        currentUser: `${this.currentUser}`
      }
    });
  }
}
