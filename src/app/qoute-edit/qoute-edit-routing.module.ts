import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QouteEditPage } from './qoute-edit.page';

const routes: Routes = [
  {
    path: '',
    component: QouteEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QouteEditPageRoutingModule {}
