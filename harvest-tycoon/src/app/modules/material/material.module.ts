import { NgModule } from '@angular/core';

// Material Components:
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatSliderModule } from '@angular/material/slider';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';



const MaterialComponents = [
  MatProgressSpinnerModule,
  MatButtonModule,
  MatRadioModule,
  MatSliderModule,
  MatCardModule,
  MatTabsModule,
  MatGridListModule,
  MatFormFieldModule,
  MatInputModule,
  MatStepperModule
]

@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule { }
