import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VideodPage } from './videod.page';

const routes: Routes = [
  {
    path: '',
    component: VideodPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VideodPageRoutingModule {}
