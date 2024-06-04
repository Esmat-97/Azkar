import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MorningPageRoutingModule } from './morning-routing.module';

import { MorningPage } from './morning.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MorningPageRoutingModule
  ],

})
export class MorningPageModule {}
