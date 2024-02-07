import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CARS_ROUTES } from './cars.routes';
import { CarsListComponent } from './cars-list/cars-list.component';
import {MatCardModule} from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { CarsService } from './cars.service';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule.forChild(CARS_ROUTES),
    MatCardModule,
    HttpClientModule,
    MatIconModule,
    MatButtonModule
  ],
  declarations: [
    CarsListComponent
  ],
  providers: [
    CarsService
  ]
})
export class CarsModule { }
