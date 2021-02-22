import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QouteEditPageRoutingModule } from './qoute-edit-routing.module';

import { QouteEditPage } from './qoute-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QouteEditPageRoutingModule
  ],
  declarations: [QouteEditPage]
})
export class QouteEditPageModule {}
