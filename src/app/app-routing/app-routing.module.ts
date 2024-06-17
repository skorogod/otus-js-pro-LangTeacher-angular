import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { SettingsComponent } from '../components/settings/settings.component';
import { GoComponent } from '../components/go/go.component';
import { RecentlyAddedComponent } from '../components/recently-added/recently-added.component';


const appRoutes: Routes = [
  {
    path: 'go',
    loadChildren: () => import('../components/go/go.component').then(c => c.GoComponent)
  },
  {
    path: 'settings',
    loadChildren: () => import('../components/settings/settings.component').then(c => c.SettingsComponent)
  },
  {
    path: 'recently-added',
    loadChildren: () => import('../components/recently-added/recently-added.component').then(c => c.RecentlyAddedComponent)
  }
]



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: false
      }
    ),
    CommonModule
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
