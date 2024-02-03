import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const APP_ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'car-management',
    loadChildren: () => import('./cars-management/cars.module')
        .then(m => m.CarsModule)
  }
];
