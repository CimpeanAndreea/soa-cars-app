import { Body, Controller, Delete, Get, Inject, Param, Post, Put, UseGuards } from "@nestjs/common";
import { CarService } from "./car.service";
import { Car } from "./car.entity";
import { ClientProxy } from "@nestjs/microservices";

@Controller('cars')
export class CarController {
    constructor(private readonly carService: CarService, 
                @Inject("CAR_SERVICE") private readonly clientProxy: ClientProxy) {
    }

    @Get()
    async getAll(): Promise<Car[]> {
        return await this.carService.findAll();
    }

    @Get('/:id')
    async getOne(@Param('id') id: number): Promise<Car> {
        return await this.carService.findOne(+id);
    }

    @Post()
    async create(@Body() car: Car): Promise<Car> {
        const createdCar = await this.carService.create(car);
        console.log("CREATED CAR:", createdCar);
        
        this.clientProxy.emit('car_created', createdCar);
        console.log("EMITTED CREATE CAR");

        return createdCar;
    }

    @Put('/:id')
    async update(@Param('id') id: number, @Body() car: Car): Promise<Car> {
        const updatedCar = await this.carService.update(+id, car);

        this.clientProxy.emit('car_updated', updatedCar);
        console.log("EMITTED UPDATE CAR");

        return updatedCar;
    }

    @Delete('/:id')
    async delete(@Param('id') id: number): Promise<void> {
        await this.carService.delete(+id);

        this.clientProxy.emit('car_deleted', id);
        console.log("EMITTED DELETE CAR");
    }
}