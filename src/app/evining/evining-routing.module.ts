import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EviningPage } from './evining.page';

const routes: Routes = [
  {
    path: '',
    component: EviningPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EviningPageRoutingModule {}
