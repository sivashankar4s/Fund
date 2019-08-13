import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-reason',
  templateUrl: './reason.page.html',
  styleUrls: ['./reason.page.scss'],
})
export class ReasonPage implements OnInit {

  id='';
  amount='';
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.amount = this.route.snapshot.params.amount;
  }
}
