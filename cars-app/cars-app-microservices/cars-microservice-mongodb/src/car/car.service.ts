import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Car } from "./car.model";
import { Model } from "mongoose";

@Injectable()
export class CarService {
    constructor(@InjectModel(Car.name) private readonly carModel: Model<Car>) {}
    
    async findAll(): Promise<Car[]> {
        return this.carModel.find().exec();
    }

    async finOne(id: number): Promise<Car> {
        return this.carModel.findOne({ id: id }).exec();
    }

    async create(car: Car): Promise<Car> {
        const newCar = new this.carModel(car);
        return newCar.save();
    }

    async update(id: number, car: Car): Promise<Car> {
        return this.carModel.findOneAndUpdate({ id: id }, car).exec();
    }

    async delete(id: number): Promise<Car> {
        return this.carModel.findOneAndDelete({ id: id }).exec();
    }
}