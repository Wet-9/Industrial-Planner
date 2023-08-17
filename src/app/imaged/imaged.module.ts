import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ImagedPageRoutingModule } from './imaged-routing.module';

import { ImagedPage } from './imaged.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ImagedPageRoutingModule
  ],
  declarations: [ImagedPage]
})
export class ImagedPageModule {}
