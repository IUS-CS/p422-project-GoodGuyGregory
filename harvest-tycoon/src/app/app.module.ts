import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material/material.module';
import { FormsModule } from '@angular/forms';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './components/account-UI/dashboard/dashboard.component';
import { PlantComponent } from './components/account-UI/plant/plant.component';
import { CommunityComponent } from './components/account-UI/community/community.component';
import { UserPlantsComponent } from './components/account-UI/user-plants/user-plants.component';
import { UserHeaderComponent } from './components/account-UI/headers/user-header/user-header.component';



@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    LoginComponent,
    DashboardComponent,
    PlantComponent,
    CommunityComponent,
    UserPlantsComponent,
    UserHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
