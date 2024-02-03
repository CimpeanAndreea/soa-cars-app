import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Car {
    @Prop()
    id: number;

    @Prop()
    model: string;

    @Prop()
    year: number;

    @Prop()
    image: string;
}

export const CarSchema = SchemaFactory.createForClass(Car);