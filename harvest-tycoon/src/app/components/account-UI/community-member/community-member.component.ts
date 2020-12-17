import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { User } from 'src/app/models/user';
import { CreateMessageComponent } from '../messaging/create-message/create-message.component';

@Component({
  selector: 'app-community-member',
  templateUrl: './community-member.component.html',
  styleUrls: ['./community-member.component.scss']
})
export class CommunityMemberComponent implements OnInit {

  @Input() user: User;

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  openDialog(user: User): void {
    let username = user.username;
    this.dialog.open(CreateMessageComponent, { data: { user: `${username}`}});
  }
}
