## What is MVC in backend? (3 lines)
MVC stands for Model, View, and Controller, a design pattern used to organize backend code.  
Model handles data and business logic, Controller processes requests and sends responses.  
View represents the response layer (JSON/APIs in backend applications).

## What is the role of routes vs controllers? (3 lines)
Routes define the API endpoints and decide which controller should handle a request.  
Controllers contain the actual logic to process the request and prepare the response.  
This separation keeps code clean, readable, and easy to maintain.

## What is middleware? (2 lines)
Middleware is a function that runs between the request and response cycle in Express.  
It is used for tasks like validation, authentication, logging, and error handling.

## What you built today (3 lines)
I structured a backend project using MVC pattern with separate routes and controllers.  
I created health and user routes with API versioning `/api/v1`.  
I implemented custom notFound and error handling middleware for clean error responses.
