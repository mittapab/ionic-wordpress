import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QoutesPageRoutingModule } from './qoutes-routing.module';

import { QoutesPage } from './qoutes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QoutesPageRoutingModule
  ],
  declarations: [QoutesPage]
})
export class QoutesPageModule {}
