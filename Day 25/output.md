Why JWT logout is hard  
- JWTs are stateless, so once issued the server cannot revoke them until expiry.

How you invalidated tokens  
- Stored a `loggedOutAt` timestamp on the user and rejected any token issued before that time in the auth middleware.

Why password change must invalidate tokens  
- If old tokens stay valid after a password change, a stolen token can still access the account.

One security mistake you avoided today  
- Allowing previously issued tokens to remain valid after logout or password change.
