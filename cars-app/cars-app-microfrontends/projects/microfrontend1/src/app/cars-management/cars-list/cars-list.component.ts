import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Car } from '../../car';
import { CarsService } from '../cars.service';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrl: './cars-list.component.css'
})
export class CarsListComponent implements OnInit {

  cars : Car[] = [];

  constructor(private carsService: CarsService) { }

  ngOnInit(): void {
    this.carsService.getCars().subscribe({
      next: (cars) => this.cars = cars,
      error: (error) => console.error(error),
    })
  }

  delete(id: number): void {
    this.carsService.deleteCar(id).subscribe({
      next: () => this.cars = this.cars.filter(car => car.id != id),
      error: (error) => console.error(error),
    })
  }
}
