import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VideodPageRoutingModule } from './videod-routing.module';

import { VideodPage } from './videod.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VideodPageRoutingModule
  ],
  declarations: [VideodPage]
})
export class VideodPageModule {}
