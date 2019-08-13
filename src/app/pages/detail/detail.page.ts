import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  id='';
  isValid=false;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
  }

  onChangeTime(amount) {
    if (amount >= 1000 && amount <= 5000 ) {
      this.isValid = true;
    } else {
      this.isValid = false;
    }

  }
}
