## Day 16 – output.md

### What is JWT and why it is used?
JWT (JSON Web Token) is a secure token used to identify authenticated users.  
It allows the server to verify users without storing session data.  
JWT makes authentication stateless, scalable, and efficient.

### What information should NOT be stored in JWT?
Passwords or any sensitive personal data should never be stored in JWT.  
JWT payload can be decoded, so only non-sensitive identifiers should be included.

### How password verification works during login?
The user sends email and password to the server during login.  
The server finds the user by email and compares the entered password with the hashed password using bcrypt.  
If the comparison is successful, the user is authenticated and a JWT is generated.

### What you built today
I implemented a complete login flow using email and password.  
I verified passwords securely using bcrypt and schema methods.  
I generated JWT tokens on successful login for authenticated access.
