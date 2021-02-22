import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QouteDetailPage } from './qoute-detail.page';

const routes: Routes = [
  {
    path: '',
    component: QouteDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QouteDetailPageRoutingModule {}
