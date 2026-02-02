## What problem validation solves
Validation stops bad or unexpected input at the entry point, so controllers and services don’t need to defend against missing fields, wrong types, or forbidden data.

## Where validation sits in my backend architecture
Validation runs at the route level, before auth and controllers:
Request → Validation → Auth → Controller → Service.

## One bug validation prevented today
It prevented users from updating forbidden fields like `role` or sending empty update payloads that would silently do nothing.

## One thing I misunderstood initially
I thought services should double-check input validity, but validation schemas already guarantee input shape, so services should only handle business logic.


..................................................................................................................

## What makes an API feel “professional” beyond working features
Consistency. Predictable response shapes, clear error messages, correct HTTP status codes, and strict separation of validation, auth, and business logic make an API easy to trust and integrate with.

## One place in my current backend that could confuse a frontend developer
Inconsistent success keys (`success` vs `status`) and slightly different response shapes across endpoints could force extra frontend condition checks.

## One security assumption I was making unconsciously
I assumed that because the frontend is “my own app,” its input could be trusted—but in reality, every request must be treated as potentially malicious.

## One thing I will be more strict about going forward
Defining and enforcing API contracts early—same response format, same error structure, and validation before any logic runs.



..................................................................................................................

## One piece of logic in my backend that might be hard to change later
The soft-delete strategy using `isActive` is embedded across queries and services, so changing to a different deletion or archival approach later would require touching many parts of the codebase.

## One place where responsibilities could blur if the project grows
If validation rules start leaking into services or controllers again, the boundary between request validation and business logic could become unclear and harder to maintain.

## One decision I made that will save me time in the future
Centralizing validation with Yup and using a single generic validator middleware will prevent duplicated checks and reduce bugs as the number of endpoints grows.

## One habit I want to build as a backend engineer
Always designing APIs with clear contracts and trust boundaries before writing feature logic.



..................................................................................................................

## One API design decision I made that could hurt long-term stability
Using a single combined route file for auth, user, and admin actions could become hard to scale as the API grows and responsibilities increase.

## One place where error responses could be clearer or more consistent
Some errors use generic messages while others are very specific, which could confuse frontend developers about how to handle different failure cases.

## One assumption I am making about how the frontend will use my API
I assume the frontend will always follow the expected request structure and flow, but in reality it may send incomplete, duplicated, or unexpected requests.

## One thing I would document if another developer joined tomorrow
The validation → auth → controller → service flow and the API response contract, so they clearly understand where logic belongs and how data is trusted.


..................................................................................................................

## One endpoint in my API that could be abused or overloaded
The login endpoint could be abused through brute-force attempts since there is no rate limiting or lockout mechanism yet.

## One operation that is not truly idempotent yet
The logout operation is not strictly idempotent because it updates `passwordChangedAt` every time it is called, even if the user is already logged out.

## One failure scenario I have not handled at all
Database downtime or slow queries are not handled explicitly, so the API does not distinguish between operational DB failures and generic server errors.

## One thing I would log in production but never expose in an API response
Detailed error stacks and authentication-related metadata (such as token decode failures or user lookup issues) should be logged internally but never sent to the client.


..................................................................................................................

## One architectural decision that works now but may hurt at scale
Using a single MongoDB query pattern with soft deletes (`isActive`) everywhere works now, but at scale it could impact query performance and complicate indexing and data lifecycle management.

## One file or layer that would grow fastest in a real product
The services layer would grow the fastest as more business rules, edge cases, and cross-entity operations are added over time.

## One assumption my backend makes that might not hold forever
It assumes a single type of client and usage pattern, but future clients (mobile apps, third-party integrations) may require different rate limits, contracts, or response needs.

## One thing I would isolate first if this became a multi-team codebase
The validation and API contract layer, so teams can work independently without breaking request/response expectations across services.


..................................................................................................................