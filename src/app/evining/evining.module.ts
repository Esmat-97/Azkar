import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EviningPageRoutingModule } from './evining-routing.module';

import { EviningPage } from './evining.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EviningPageRoutingModule
  ],

})
export class EviningPageModule {}
