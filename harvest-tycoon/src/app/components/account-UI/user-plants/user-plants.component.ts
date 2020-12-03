import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-plants',
  templateUrl: './user-plants.component.html',
  styleUrls: ['./user-plants.component.scss']
})
export class UserPlantsComponent implements OnInit {

  sideNavOpened = false;

  constructor() { }

  ngOnInit(): void {
  }

}
