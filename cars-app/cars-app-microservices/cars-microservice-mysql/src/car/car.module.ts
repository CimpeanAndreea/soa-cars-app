import { Module } from '@nestjs/common';
import { CarController } from './car.controller';
import { CarService } from './car.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Car } from './car.entity';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
    imports: [
        TypeOrmModule.forFeature([Car]),
        ClientsModule.register([
          {
            name: 'CAR_SERVICE',
            transport: Transport.RMQ,
            options: {
                urls: ['amqps://zmfwdrpp:elIhm4tjtin_RaEuMY6LIKGwZ3f_-jSm@gull.rmq.cloudamqp.com/zmfwdrpp'],
                queue: 'cars-queue',
                queueOptions: {
                    durable: false
                },
            },
        },
      ])
    ],
  controllers: [CarController],
  providers: [CarService]
})
export class CarModule {}
