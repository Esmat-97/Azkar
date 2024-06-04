import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MorningPage } from './morning.page';

const routes: Routes = [
  {
    path: '',
    component: MorningPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MorningPageRoutingModule {}
