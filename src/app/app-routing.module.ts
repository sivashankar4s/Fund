import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)},
  { path: 'home/login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'home/detail/:id', loadChildren: './pages/detail/detail.module#DetailPageModule' },
  { path: 'account/:id/:amount', loadChildren: './pages/account/account.module#AccountPageModule' },
  { path: 'reason/:id/:amount', loadChildren: './pages/reason/reason.module#ReasonPageModule' },
  { path: 'account-page/:id/:amount', loadChildren: './pages/account-page/account-page.module#AccountPagePageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
