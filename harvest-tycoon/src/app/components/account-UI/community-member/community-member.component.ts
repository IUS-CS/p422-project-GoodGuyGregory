import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user';
import { CreateMessageComponent } from '../messaging/create-message/create-message.component';

@Component({
  selector: 'app-community-member',
  templateUrl: './community-member.component.html',
  styleUrls: ['./community-member.component.scss']
})
export class CommunityMemberComponent implements OnInit {
  currentUser: string

  @Input() user: User;

  constructor(
    public dialog: MatDialog,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.currentUser = this.route.snapshot.params.username;
  }

  openDialog(user: User): void {
    let username = user.username;
    this.dialog.open(CreateMessageComponent, {
      data: {
        user: `${username}`,
        currentUser: `${this.currentUser}`
      }
    });
  }
}
