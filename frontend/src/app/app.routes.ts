import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  {
    path: 'auth',
    loadChildren: () =>
      import('./modules/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'property',
    loadChildren: () =>
      import('./modules/property/property.module').then(
        (m) => m.PropertyModule
      ),
  },
  {
    path: 'user',
    loadChildren: () =>
      import('./modules/user/user.module').then((m) => m.UserModule),
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./modules/admin/admin.module').then((m) => m.AdminModule),
  },
  {
    path: 'messaging',
    loadChildren: () =>
      import('./modules/messaging/messaging.module').then(
        (m) => m.MessagingModule
      ),
  },
  { path: '**', redirectTo: '/property' },
];
