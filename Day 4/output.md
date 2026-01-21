# Task 6 — GitHub User Finder

## What is async/await in your own words (2–3 lines)
Async/await is used to handle asynchronous code like API calls in a simple way.
`async` makes a function return a promise, and `await` pauses the function until the promise is resolved.
It helps write async code like normal step-by-step code.

## What does try/catch do (2 lines)
`try` runs the code that may cause an error.
If error happens, `catch` runs and prevents the app from crashing.

## What does res.ok mean
`res.ok` is a boolean value in fetch response.
It becomes `true` when the HTTP status is successful (200–299), otherwise it becomes `false`.

## Biggest bug you faced + fix
Biggest bug: My GitHub API request was returning 403 Forbidden and I was showing “User not found” incorrectly.
Fix: I checked `response.status` and handled 403 separately (API rate limit exceeded) and showed the correct error message.
