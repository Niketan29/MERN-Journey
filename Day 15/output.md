## Day 15 
### Why passwords must be hashed
Passwords must be hashed so they are not stored in plain text in the database.  
If a database is compromised, hashed passwords cannot be easily reversed to original values.  
This protects user accounts even during data breaches.

### What is bcrypt and why it is used
bcrypt is a secure password hashing library designed for authentication systems.  
It uses salting and multiple rounds to slow down brute-force attacks.

### What is a pre-save hook used for today
A pre-save hook runs automatically before saving a document to the database.  
Today, it was used to hash the password before storing the user data.

### What you built today
I built a secure User schema with password validation.  
I implemented bcrypt password hashing using a pre-save hook and added password comparison logic.  
I also ensured passwords are hidden from API responses for better security.
