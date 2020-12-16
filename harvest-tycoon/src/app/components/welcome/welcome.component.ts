import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { UserDataService } from 'src/app/services/user-data.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  constructor(
    private userDataService: UserDataService
  ) { }

  showingAbout: boolean = true;
  creatingUser: boolean = false;

  newUser: User;
  enteringUserDetails: boolean = true;
  successfullyCreated: boolean = false;
  badRequestError: string = "";
  isError: boolean = false;


  createUserForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    confirmPassword: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    age: new FormControl('', [Validators.required, Validators.min(13), Validators.max(120)]),
    phone: new FormControl('', [Validators.required, Validators.pattern('^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$')]),
  })

  ngOnInit(): void {

  }

  hideAbout(): void {
    // reveal about information
    this.creatingUser = !this.creatingUser;
    this.showingAbout = !this.showingAbout;
    // console.log(this.creatingUser);
  }

  showAbout(): void {
    this.creatingUser = !this.creatingUser;
    this.showingAbout = !this.showingAbout;
    // console.log(this.creatingUser);
  }


  createUser(): void {
    // create User object with attibutes
    this.newUser = {
      username: this.createUserForm.controls.username.value,
      password: this.createUserForm.controls.password.value,
      email: this.createUserForm.controls.email.value,
      firstName: this.createUserForm.controls.firstName.value,
      lastName: this.createUserForm.controls.lastName.value,
      age: this.createUserForm.controls.age.value,
      phone: this.createUserForm.controls.phone.value,
      garden: {
        plants: [],
      },
      inbox: {
        messages: [],
      }
    }

    console.log(JSON.stringify(this.newUser));

    this.userDataService.createUser(this.newUser).subscribe(
      next => {
        this.enteringUserDetails = !this.enteringUserDetails;
        this.successfullyCreated = !this.successfullyCreated;
      },
      err => {
        // console.log(err);
        this.badRequestError = "please enter a unique username and email..."
        this.isError = true;
      }
    );
  }

}
