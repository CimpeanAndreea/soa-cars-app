import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { Transport } from "@nestjs/microservices";

async function bootstrap() {
    const app = await NestFactory.createMicroservice(AppModule, {
        transport: Transport.RMQ,
        options: {
            urls: ['amqps://zmfwdrpp:elIhm4tjtin_RaEuMY6LIKGwZ3f_-jSm@gull.rmq.cloudamqp.com/zmfwdrpp'],
            queue: 'cars-queue',
            queueOptions: {
                durable: false
            },
        },
    });

    await app.listen().then(() => {
        console.log("Microservice is listening!")
    })
}

bootstrap();