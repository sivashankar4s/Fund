import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HomePage } from './home.page';
import { AccordionComponent } from '../accordion/accordian.component';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'personal-fund',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../personal-fund/personal-fund.module').then(m => m.PersonalFundPageModule)
          }
        ]
      },
      {
        path: 'history',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../emergency-fund/emergency-fund.module').then(m => m.EmergencyFundPageModule)
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  providers: [],
  declarations: [HomePage, AccordionComponent],
})
export class HomePageModule {}
