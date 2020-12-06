import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserDataService } from 'src/app/services/user-data.service';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private userDataService: UserDataService
  ) { }
  showingAbout: boolean = true;
  creatingUser: boolean = false;



  createUserForm: FormGroup;


  ngOnInit(): void {
    this.createUserForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      confirmPassword: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      age: new FormControl('', [Validators.required, Validators.min(13), Validators.max(120)]),
      phone: new FormControl('', [Validators.required, Validators.pattern('^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$')]),
    })
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

  onSubmit(): void {

  }

}
