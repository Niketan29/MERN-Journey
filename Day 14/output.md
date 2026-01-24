Day 14 – output.md

Why schema validation is important  
Schema validation ensures that only valid and well-structured data is stored in the database.  
It automatically blocks incorrect or incomplete data before saving.  
This keeps data consistent and reduces bugs in the application.

Difference between schema validation & controller validation  
Schema validation is handled by Mongoose and runs automatically before saving data.  
Controller validation is manual and used for basic checks like required fields.  
Schema validation is centralized, while controller validation should stay minimal.

What is a pre-save hook?  
A pre-save hook is a Mongoose middleware that runs before a document is saved.  
It is commonly used for tasks like data normalization or password hashing.

What you improved today  
I improved my user schema with proper validations and clean error messages.  
I fixed duplicate email handling using MongoDB error codes and middleware.  
I learned when to avoid pre-save hooks and use built-in schema options instead.
