import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserDataService } from '../../../services/user-data.service'
import { User } from '../../../models/user';

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.scss']
})
export class CommunityComponent implements OnInit {
  selectedUserName: string;
  userCommunity: Observable<User[]>;


  constructor(
    private userDataService: UserDataService,
  ) { }

  ngOnInit(): void {
    this.userCommunity = this.userDataService.getUsers();

  }


}
