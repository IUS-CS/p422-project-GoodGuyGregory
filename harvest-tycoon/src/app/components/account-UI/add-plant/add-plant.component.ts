import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Plant } from 'src/app/models/plant';
import { Observable, Subscriber } from 'rxjs';
import { PlantDataService } from 'src/app/services/plant-data.service';

@Component({
  selector: 'app-add-plant',
  templateUrl: './add-plant.component.html',
  styleUrls: ['./add-plant.component.scss']
})
export class AddPlantComponent implements OnInit {

  currentUser: Observable<string>
  createUserPlantForm: FormGroup
  newPlant: Plant

  formOptions = {
    lifeStage: ["Seed", "Seedling", "Young Plant", "Mature Plant"],
    lightPreferences: ["Some Sunlight", "Indirect Sunlight", "Shade", "Full Sun"]
  };
  constructor(
    private route: ActivatedRoute,
    private plantDataService: PlantDataService
  ) { }

  ngOnInit(): void {
    //  gets the current route attribute for the username
    this.currentUser = this.route.snapshot.params.username;

    this.createUserPlantForm = new FormGroup({
      type: new FormControl('', Validators.required),
      name: new FormControl('', [Validators.required, Validators.minLength(2)]),
      lifeStage: new FormControl('', Validators.required),
      lightPreferences: new FormControl('', Validators.required),
      wateringPreferences: new FormControl('', Validators.required),
    });
  }

  addPlant(): void {
    this.newPlant = {
      type: this.createUserPlantForm.controls.type.value,
      name: this.createUserPlantForm.controls.name.value,
      lifestage: this.createUserPlantForm.controls.lifeStage.value,
      lightPreferences: this.createUserPlantForm.controls.lightPreferences.value,
      wateringPreferences: this.createUserPlantForm.controls.wateringPreferences.value,
    }

    console.log(this.newPlant);

    console.log(this.currentUser);

    // this.plantDataService.
  }

}
