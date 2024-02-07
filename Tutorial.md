# Message Brokers with RabbitMQ Tutorial #
## What is RabbitMQ ##
RabbitMQ is an open-source message broker software that facilitates communication between distributed systems by implementing messaging queues. It is basically a software where queues are defined in order to transfer messages that can include any kind of information. This queue-manager software stores messages received from an application until a receiving application connects and consumes the message from the queue. 

RabbitMQ is widely used in enterprise and cloud environments for building scalable and reliable messaging systems, enabling decoupled and distributed architectures. It's commonly used in scenarios such as task distribution, event-driven architectures, and integrating disparate systems. Hence it is a useful tool when using microservices architecture as well.

## Example Scenario ##
A message broker like RabbitMQ acts like a middleman in different possible scenarios. Its main role is ti reduce load and delivery time of web applications servers by delegating tasks that would consume a lot of resources and time if instead being done on the spot. Take for example an ordering app that receive multiple requests in real time. Order processing, order fulfillment, delivery status updates and customer notifications, all of them can be handled using a post message and consume message paradigm that takes into consideration the load of each involved component. 

## Reasons to Use a Message Brocker ##
As mentioned, a message brocker (like RabbitMQ) alows web servers to respond to requests quickly by delegating information to a third party software instead of being forced to perform resource-heavy procedures on the spot which can block the server, hence delaying the response. Message queueing is also useful when wanting to distribute a message to multiple consumers to balance the work that need to be donw in case there are multiple workers. 

## Message Flow and Broker Structure ##
RabbitMQ broker is composed of 2 main components: **exchanges** and **queues**. An exchange is responsible for routing messages to different queues with the help of bindings and routing keys. A binding is a link between a queue and an exchange.

A message flow would look like this:

1. A producer publishes a message to an exchange
2. The exchange receives the message and routes it to the appropriate queues
3. Bindings are created from exchange to queues 
4. The message stays in queue until a consumer handles it
5. Consumer handles the message
![rabbitmq](documentation/rabbitmq.png)

## Setting Up An Instance ##
RabbitMQ can be installed to create the system, but there is also an online hosted solution of RabbitMQ through CloudAMQP that only requires an account and creating an instance. It also has a free plan. 

Create an instance
![amqp-create-instance](documentation/amqp-create-instance.png)

Fill in instance details
![amqp-name](documentation/amqp-select-region.png)

Select a region
![amqp-select-region](documentation/amqp-select-region.png)

Details of the instance
![amqp-instance-details](documentation/amqp-instance-details.png)

From RabbitMQ Manager queues can be set up and messages can be monitored
![amqp-queue](documentation/amqp-queue.png)


## Working Public Example ##
https://github.com/rengthp/nestjs-rabbitmq-microservice Presents a very simple example of using RabbitMQ in an NestJS app using microservices

There are 2 microservices **app** and **client** which communicate through the message queue mechanism provided by RabbitMQ. 

Both microservices connect to the RabbitMQ queue
But **app** listens to messages while **client** is the one that sends them

![client-rabbitmq](documentation/client-rabbitmq.png)
![app-rabbitmq](documentation/app-rabbitmq.png)



**client** controller "emits" a message which is added in the RabbitMQ queue as an event marked with the key "message_printed" pattern
![client-emit](documentation/client-emit.png)

**app** contoller listens for the "message_printed" pattern and consumes the message received on the queue
![app-receive](documentation/app-receive.png)


In this case the connection to RabbitMQ is done through localhost environment. In the case the instance would have been hosted on CloudAMQP there would have been only a simple change of the urls in each microservice connection. Just changing *amqp://guest:guest@localhost:5672/hello* with the Instance URL from AMQP Details section from CloudAMQP would have done the job.