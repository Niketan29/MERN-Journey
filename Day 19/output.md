### How Authentication Flow Works End-to-End
User logs in with email and password which are validated against the database.  
On successful login, a JWT is generated containing the user ID and sent to the client.  
The client sends this token in the Authorization header for protected requests.  
The protect middleware verifies the token, fetches the user from DB, and attaches it to req.user.  
Controllers then use req.user to allow access or enforce ownership and roles.

### Why JWT-Based Auth Is Stateless
JWT does not require storing session data on the server.  
Each request carries all authentication information inside the token itself.

### How Admin-Only Routes Are Secured
Admin routes are protected using authentication middleware followed by role-based authorization.  
The restrictedTo middleware checks req.user.role and blocks non-admin users.

### What You Finalized Today
Completed JWT authentication with reusable token generation utility.  
Implemented role-based and ownership-based authorization (/admin and /me routes).  
Finalized secure routing structure with proper middleware chaining.
