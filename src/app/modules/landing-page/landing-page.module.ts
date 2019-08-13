import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LandingPagePage } from './landing-page.page';

const routes: Routes = [
  {
    path: '',
    component: LandingPagePage,
    children: [
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../home/home.module').then(m => m.HomePageModule)
          }
        ]
      },
      {
        path: 'history',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../history/history.module').then(m => m.HistoryPageModule)
          }
        ]
      },
      {
        path: 'queries',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../queries/queries.module').then(m => m.QueriesPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/landing-page/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/landing-page/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LandingPagePage]
})
export class LandingPagePageModule {}
