## Update APIs 

**Difference between update self vs update others**
Updating self uses `req.user` and fetch–modify–save for security, while updating others (admin) uses `:id` with controlled `findByIdAndUpdate`.

**Why role-based update is needed**
To prevent unauthorized users from changing sensitive fields like roles or accessing other users’ data.

**One mistake beginners make with update APIs**
Using `findByIdAndUpdate` blindly without field whitelisting or authorization checks.

**What you built today**
Implemented secure user self-update and admin update APIs using service layer architecture, role-based access control, and centralized error handling.
