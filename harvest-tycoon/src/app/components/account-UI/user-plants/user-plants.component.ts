import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-plants',
  templateUrl: './user-plants.component.html',
  styleUrls: ['./user-plants.component.scss']
})
export class UserPlantsComponent implements OnInit {

  housePlants = false;
  harvestablePlants = false;
  plantSelected = false;

  constructor() { }

  ngOnInit(): void {
  }

}
