import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-onboard-login',
  templateUrl: './onboard-login.page.html',
  styleUrls: ['./onboard-login.page.scss'],
})
export class OnboardLoginPage implements OnInit {

  private userForm = {
    email: [null],
    password: [null],
    securityPin: [null]
  };
  public form: FormGroup;
  public progressValue = 0.33;
  constructor(
    private formBuilder: FormBuilder,
  ) {
    this.form = this.formBuilder.group(this.userForm);
  }

  ngOnInit() {
  }

  loginForm() {
    this.progressValue = 0.66;
    console.log(this.form);
  }

  submitPin() {
    this.progressValue = 1;
  }

  finishOnboard() {
    
  }
}
