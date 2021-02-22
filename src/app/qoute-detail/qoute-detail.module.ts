import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QouteDetailPageRoutingModule } from './qoute-detail-routing.module';

import { QouteDetailPage } from './qoute-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QouteDetailPageRoutingModule
  ],
  declarations: [QouteDetailPage]
})
export class QouteDetailPageModule {}
