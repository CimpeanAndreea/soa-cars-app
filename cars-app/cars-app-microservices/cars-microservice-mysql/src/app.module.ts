import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { CarModule } from './car/car.module';
import { AuthModule } from './auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './auth/auth.guard';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'mysql_db', 
      port: 3306,
      username: 'root',
      password: 'MyHoney15!',
      logging: true,
      database: 'cars-app',
      autoLoadEntities: true, //automatically discover and load entity classes
      synchronize: true, //automatically create database tables based on the entity classes 
    }),
    ConfigModule.forRoot({
      isGlobal: true
    }),
    CarModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService,
    {
      provide: APP_GUARD,
      useClass: AuthGuard, //all endpoints should be protected
    },
  ],
})
export class AppModule {}
