import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-account-page',
  templateUrl: './account-page.page.html',
  styleUrls: ['./account-page.page.scss'],
})
export class AccountPagePage implements OnInit {

  email = '';
  amount='';
  id='';
  name='';
  account='';
  loginData = [
    {
      id: '1',
      email: 'test',
      name: 'Sivashankar.S',
      account: "5423 3456 34566"
    },
    {
      id: '2',
      email: 'test2',
      name: 'Sharvesh',
      account: "5423 2655 23598"
    },
    {
      id: '3',
      email: 'test3',
      name: 'Sathish',
      account: "5423 7894 65598"
    }
  ]

  constructor(private route: ActivatedRoute) {
    
   }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.amount = this.route.snapshot.params.amount;
    this.loginData.forEach(element => {
      if (element.id === this.id) {
        this.name = element.name;
        this.account = element.account;
        console.log(element)
      }
    });
    this.route.queryParams.subscribe(params => {
      if (params && params.special) {
      
      }
    });
  }

}
