import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { PlantDataService } from 'src/app/services/plant-data.service';
import { Plant } from '../../../models/plant';

@Component({
  selector: 'app-user-plants',
  templateUrl: './user-plants.component.html',
  styleUrls: ['./user-plants.component.scss']
})
export class UserPlantsComponent implements OnInit {

  currentUser: string;
  currentUserPlants: Observable<Plant[]>;

  userPlant: Plant;
  plantSelected = false;

  constructor(
    private route: ActivatedRoute,
    private plantDataService: PlantDataService
  ) { }

  ngOnInit(): void {
    this.currentUser = this.route.snapshot.params.username;

    this.currentUserPlants = this.plantDataService.getUserPlants(this.currentUser);
  }

  selectPlant(plantSelection: Plant): void {
    this.userPlant = plantSelection;
    this.plantSelected = true;
  }


}
