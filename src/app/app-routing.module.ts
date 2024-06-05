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
    path: 'about',
    loadChildren: () => import('./about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'languages',
    loadChildren: () => import('./languages/languages.module').then( m => m.LanguagesPageModule)
  },  {
    path: 'morning',
    loadChildren: () => import('./morning/morning.module').then( m => m.MorningPageModule)
  },
  {
    path: 'evining',
    loadChildren: () => import('./evining/evining.module').then( m => m.EviningPageModule)
  },
  {
    path: 'prayer',
    loadChildren: () => import('./prayer/prayer.module').then( m => m.PrayerPageModule)
  },
  {
    path: 'sleep',
    loadChildren: () => import('./sleep/sleep.module').then( m => m.SleepPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
