# Day 21

## Why controllers should stay thin
Controllers should only orchestrate flow. Business logic in controllers makes them hard to read, test, and extend.

## What problem Query Builder solves
It centralizes filtering, sorting, and pagination logic so controllers don’t repeat the same code for every API.

## How this improves scalability
New query features can be added in one place without touching multiple controllers, reducing bugs and refactor cost.

## One thing that confused you today
Understanding that `find()` does not fetch data but only builds query conditions.

## One thing that felt “professional”
The controller reading like English: get data → apply features → execute → respond.
