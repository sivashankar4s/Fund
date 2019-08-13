import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email = '';
  id = '';
  loginData = [
    {
      id: '1',
      email: 'test'
    },
    {
      id: '2',
      email: 'test2'
    },
    {
      id: '3',
      email: 'test3'
    }
  ]
  constructor() {
  }

  ngOnInit() {
  }
  onChangeTime(email) {
    this.email = email;
    this.loginData.forEach(element => {
      if (element.email === email) {
        this.id = element.id;
        console.log(element)
      }
    });
  }

}
