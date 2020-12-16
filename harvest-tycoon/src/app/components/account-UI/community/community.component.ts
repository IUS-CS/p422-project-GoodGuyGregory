import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { UserDataService } from '../../../services/user-data.service'
import { User } from '../../../models/user';

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.scss']
})
export class CommunityComponent implements OnInit {
  currentUser: string
  selectedUserName: string;
  userCommunity: Observable<User[]>;


  constructor(
    private route: ActivatedRoute,
    private userDataService: UserDataService,
  ) { }

  ngOnInit(): void {
    this.currentUser = this.route.snapshot.params.username;

    this.userCommunity = this.userDataService.getOtherUsers(this.currentUser);

  }


}
