import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CarModule } from './car/car.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://mongodb:27017/cars-app', { //used container name instead of localhost:27017
      autoCreate: true
    }),
    CarModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
