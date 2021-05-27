import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'appareils',
    children: [
      {
        path: '',
        loadChildren: () => import('./appareils/appareils.module').then( m => m.AppareilsPageModule)
      },
      {
        path: ':id',
        loadChildren: () => import('./appareil/appareil.module').then( m => m.AppareilPageModule)
      },
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
