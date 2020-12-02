import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  constructor() { }
  showingAbout: boolean = true;
  creatingUser: boolean = false;

  createUserForm: FormGroup;

  ngOnInit(): void {
  }

  hideAbout(): void {
    // reveal about information
    this.creatingUser = !this.creatingUser;
    this.showingAbout = !this.showingAbout;
    console.log(this.creatingUser);
  }

  showAbout(): void {
    this.creatingUser = !this.creatingUser;
    this.showingAbout = !this.showingAbout;
    console.log(this.creatingUser);
  }

}
