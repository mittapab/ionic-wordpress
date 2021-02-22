import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'qoutes',
    loadChildren: () => import('./qoutes/qoutes.module').then( m => m.QoutesPageModule)
  },
  {
    path: 'qoute-detail',
    loadChildren: () => import('./qoute-detail/qoute-detail.module').then( m => m.QouteDetailPageModule)
  },
  {
    path: 'qoute-edit',
    loadChildren: () => import('./qoute-edit/qoute-edit.module').then( m => m.QouteEditPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then( m => m.AboutPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
