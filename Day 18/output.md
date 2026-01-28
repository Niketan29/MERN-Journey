### Difference between Authentication and Authorization
Authentication verifies who the user is using credentials or tokens.  
Authorization determines what actions the authenticated user is allowed to perform.

### What is Role-Based Access Control (RBAC)?
RBAC restricts system access based on user roles like user or admin.  
Permissions are assigned to roles instead of individual users for better scalability.

### Why Authorization Must Happen After Authentication?
Authorization depends on knowing the user’s identity first.  
Without authentication, the system cannot reliably decide permissions.

### What You Built Today
Implemented JWT-based authentication with protected routes.  
Added role-based authorization using reusable middleware.  
Restricted admin-only routes and secured user access properly.
