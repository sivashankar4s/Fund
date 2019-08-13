import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EmergencyFundPage } from './emergency-fund.page';

const routes: Routes = [
  {
    path: '',
    component: EmergencyFundPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EmergencyFundPage]
})
export class EmergencyFundPageModule {}
