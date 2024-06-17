import { Routes } from '@angular/router';
import { GoComponent } from './components/go/go.component';
import { SettingsComponent } from './components/settings/settings.component';
import { RecentlyAddedComponent } from './components/recently-added/recently-added.component';

export const routes: Routes = [
    {
        path: 'go',
        component: GoComponent
      },
      {
        path: 'settings',
        component: SettingsComponent
      },
      {
        path: 'recently-added',
        component: RecentlyAddedComponent
      }
];
