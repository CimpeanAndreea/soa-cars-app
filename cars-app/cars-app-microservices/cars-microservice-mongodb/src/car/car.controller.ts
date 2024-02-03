import { Body, Controller, Get, Post } from '@nestjs/common';
import { CarService } from './car.service';
import { Car } from './car.model';
import { EventPattern } from '@nestjs/microservices';

@Controller('cars')
export class CarController {
    constructor(private carService: CarService) {}

    @Get()
    async getAll(): Promise<Car[]> {
        return await this.carService.findAll();
    }

    @EventPattern('car_created')
    async create(car: Car): Promise<Car> {
        console.log("RECEIVED CREATE CAR");
        return await this.carService.create(car);
    }

    @EventPattern('car_updated')
    async update(car: Car): Promise<Car> {
        console.log("RECEIVED UPDATE CAR");
        return await this.carService.update(car.id, car);
    }

    @EventPattern('car_deleted')
    async delete(id: number): Promise<any> {
        console.log("RECEIVED DELETE CAR");
        return await this.carService.delete(id);
    }
}
