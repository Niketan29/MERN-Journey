Why hard delete is dangerous in real systems  
- It permanently removes data, breaks audit trails, and makes recovery/debugging impossible in production.

What soft delete solves  
- Keeps user data intact while disabling access, allowing recovery, audits, and safer long-term system behavior.

How you prevented deleted users from logging in  
- Added an `isActive` check in the login service and blocked token generation if the user is inactive.

One edge case you handled today  
- Prevented deleting an already-deleted user and returned a proper error instead of silently succeeding.

One mistake you almost made  
- Writing delete logic directly in the controller instead of keeping it strictly inside the service layer.
