import { Component, OnInit } from '@angular/core';
import { Car } from '../../car';
import { CarCreateService } from '../carCreate.service';

@Component({
  selector: 'app-car-create',
  templateUrl: './car-create.component.html',
  styleUrl: './car-create.component.css'
})
export class CarCreateComponent {
  model: string = "";
  year?: number | null = null;
  image: string = "";

  constructor(private createCarService: CarCreateService) {}

  createCar() {
    const car : Car = {
      model: this.model,
      year: this.year ?? 0,
      image: this.image
    }

    this.createCarService.createCar(car).subscribe({
      next: (car) => {
        if (car !== null) {
          this.model = "";
          this.year = null;
          this.image = "";
        }
      },
      error: (error) => console.error(error)
    })
  }

}
