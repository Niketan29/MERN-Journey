### Why controllers should not contain business logic

Controllers are tied to HTTP and Express. Mixing business logic there makes code hard to test, reuse, and maintain, and tightly couples logic to request/response flow.

### What problem the service layer solves

The service layer isolates business logic from HTTP concerns, making logic reusable, testable without Express, and easier to reason about.

### One example you moved from controller to service

User querying with `ApiFeatures(User.find(), req.query)` was moved from the controller into a service function.

### One thing that felt cleaner after refactor

Controllers became very short and readable—just input, service call, and response.

### One thing that confused you today

Deciding the exact boundary of what belongs in service vs controller initially felt tricky.
