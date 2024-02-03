import { Routes } from "@angular/router";
import { CarsListComponent } from "./cars-list/cars-list.component";

export const CARS_ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'cars-list',
  },
  {
    path: 'cars-list',
    component: CarsListComponent
  }
];
