import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const APP_ROUTES: Routes = [
  {
      path: '',
      component: HomeComponent,
      pathMatch: 'full'
  },
  {
      path: 'carCreate',
      loadChildren: () => import('./carCreate/carCreate.module')
          .then(m => m.CarCreateModule)
  }
];
