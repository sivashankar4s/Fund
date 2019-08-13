import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {
  email = '';
  amount='';
  id='';
  name='';
  loginData = [
    {
      id: '1',
      email: 'test',
      name: 'Sivashankar.S'
    },
    {
      id: '2',
      email: 'test2',
      name: 'Sharvesh'
    },
    {
      id: '3',
      email: 'test3',
      name: 'Sathish'
    }
  ]

  constructor(private route: ActivatedRoute,
    private router: Router) {
    
   }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.amount = this.route.snapshot.params.amount;
    this.loginData.forEach(element => {
      if (element.id === this.id) {
        this.name = element.name;
        console.log(element)
      }
    });
    this.route.queryParams.subscribe(params => {
      console.log('=====params=======',params);
      if (params && params.special) {
      
      }
    });
    // this.route.params.subscribe(
    //   data => {
    //     console.log('=======data=====',data);
    //   }
    // )
  }

  getData(id) {
    console.log('===============id======',id);
  }
}
