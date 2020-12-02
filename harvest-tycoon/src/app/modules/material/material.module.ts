import { NgModule } from '@angular/core';

// Material Components:
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatSliderModule } from '@angular/material/slider';
import { MatCardModule } from '@angular/material/card';



const MaterialComponents = [
  MatProgressSpinnerModule,
  MatButtonModule,
  MatRadioModule,
  MatSliderModule,
  MatCardModule
]

@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule { }