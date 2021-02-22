import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QoutesPage } from './qoutes.page';

const routes: Routes = [
  {
    path: '',
    component: QoutesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QoutesPageRoutingModule {}
