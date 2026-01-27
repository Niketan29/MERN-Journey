## Day 17 

### What is auth middleware?
Auth middleware is a function that runs before protected routes to check if a user is authenticated.  
It blocks unauthorized requests and allows only valid users to access protected resources.

### How JWT is verified on protected routes?
The server reads the token from the Authorization header in Bearer format.  
The token is verified using the JWT secret key with `jwt.verify()`.  
If valid, the decoded payload is used to identify the user; otherwise access is denied.

### Why we attach user to req.user?
Attaching the user to `req.user` makes authenticated user data available to controllers.  
This avoids repeated database lookups and keeps controllers clean.

### What you built today
I created an authentication middleware to protect routes using JWT.  
I verified tokens, fetched users from the database, and attached them to `req.user`.  
I successfully protected routes so only authenticated users can access them.
