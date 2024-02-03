import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CARS_ROUTES } from './cars.routes';
import { CarsListComponent } from './cars-list/cars-list.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(CARS_ROUTES)
  ],
  declarations: [
    CarsListComponent
  ]
})
export class CarsModule { }
