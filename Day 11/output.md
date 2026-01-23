## What is Node.js? (2 lines)
Node.js is a JavaScript runtime that allows us to run JavaScript outside the browser.  
It is used to build backend servers, APIs, and handle requests using an event-driven, non-blocking model.

## What is Express? (2 lines)
Express is a lightweight Node.js framework used to build web servers and REST APIs easily.  
It provides routing, middleware support, and simplifies request/response handling.

## Why we separate server.js and app.js? (2 lines)
`app.js` contains the Express app setup like middleware and routes, keeping code organized.  
`server.js` is responsible only for starting the server (app.listen) and loading configuration like PORT.

## What you built today (3 lines)
I created a basic Node.js + Express server with middleware for JSON and URL encoded data.  
I added routes like `/` for API status and `/health` for server health check with uptime.  
I separated routes into a router file and connected it to the Express app properly.
