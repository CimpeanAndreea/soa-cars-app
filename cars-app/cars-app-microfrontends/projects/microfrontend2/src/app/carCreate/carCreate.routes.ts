import { Routes } from "@angular/router";
import { CarCreateComponent } from "./car-create/car-create.component";

export const CARS_ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'car-create'
  },
  {
    path: 'car-create',
    component: CarCreateComponent
  }
];
