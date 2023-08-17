import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImagedPage } from './imaged.page';

const routes: Routes = [
  {
    path: '',
    component: ImagedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ImagedPageRoutingModule {}
