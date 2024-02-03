import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Car } from "./car.entity";
import { Repository } from "typeorm";

@Injectable()
export class CarService {
    constructor(
        @InjectRepository(Car) private readonly carRepository: Repository<Car>
    ) {
    }

    async findAll(): Promise<Car[]> {
        return await this.carRepository.find();
    }

    async findOne(id: number): Promise<Car> {
        return await this.carRepository.findOneBy({ id: id });
    }

    async create(car: Car): Promise<Car> {
        return await this.carRepository.save(car);
    }

    async update(id: number, car: Car): Promise<Car> {
        await this.carRepository.update(id, car);
        return this.carRepository.findOne({ where: { id } });
    }

    async delete(id: number): Promise<void> {
        await this.carRepository.delete({ id });
    }
}