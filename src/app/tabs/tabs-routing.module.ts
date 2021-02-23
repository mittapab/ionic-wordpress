import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'qoutes',
        loadChildren: () => import('../qoutes/qoutes.module').then(m => m.QoutesPageModule)
      },
      {
        path: 'qoutes/:id',
        loadChildren: () => import('../qoute-detail/qoute-detail.module').then(m => m.QouteDetailPageModule)
      },
      {
        path: 'about',
        loadChildren: () => import('../about/about.module').then(m => m.AboutPageModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('../profile/profile.module').then(m => m.ProfilePageModule)
      },
      {
        path: '',
        redirectTo: '/qoutes/qoutes',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/qoutes/qoutes',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
