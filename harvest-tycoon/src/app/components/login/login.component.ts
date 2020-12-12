import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})


export class LoginComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  loginForm: FormGroup;


  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    })
  }

  login(): void {
    let userToCheck = {
      username: this.loginForm.controls.username.value,
      password: this.loginForm.controls.password.value
    }

    console.log(JSON.stringify(userToCheck));
    //  Check if the Username and Password match for the entered values and allow access:
    this.router.navigate(['/dashboard', userToCheck.username]);
  }
}
