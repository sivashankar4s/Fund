import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './onboard.router.module';

import { OnboardPage } from './onboard.page';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    OnboardPage]
})
export class OnboardPageModule {}
