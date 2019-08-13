import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
    path: '',
    loadChildren: () => import('./onboard/onboard.module').then(m => m.OnboardPageModule)
  },
  { path: 'onboard-login', loadChildren: './onboard/components/onboard-login/onboard-login.module#OnboardLoginPageModule' },
  { path: 'landing-page', loadChildren: './modules/landing-page/landing-page.module#LandingPagePageModule' },
  { path: 'queries', loadChildren: './modules/queries/queries.module#QueriesPageModule' },
  { path: 'home', loadChildren: './modules/home/home.module#HomePageModule' },
  { path: 'history', loadChildren: './modules/history/history.module#HistoryPageModule' },
  { path: 'personal-fund', loadChildren: './modules/personal-fund/personal-fund.module#PersonalFundPageModule' },
  { path: 'emergency-fund', loadChildren: './modules/emergency-fund/emergency-fund.module#EmergencyFundPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
