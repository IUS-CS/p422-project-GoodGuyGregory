import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-plant',
  templateUrl: './add-plant.component.html',
  styleUrls: ['./add-plant.component.scss']
})
export class AddPlantComponent implements OnInit {

  createUserPlantForm: FormGroup
  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.createUserPlantForm = this.fb.group({
      type: ['', [Validators.required]],
      name: ['', [Validators.required, Validators.minLength(2)]],
      lifestage: ['', [Validators.required]],
      lightPreferences: ['', [Validators.required]],
      wateringPreferences: ['', [Validators.required]],
    })
  }

  addPlant(): void {

  }

}
