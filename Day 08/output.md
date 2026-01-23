# Day 8 Report — useEffect, Fetching & Search Filter

## ✅ What is useEffect (2 lines)
useEffect is a React Hook used to run side effects like API calls, timers, and event listeners.
It runs after the component renders and helps React handle non-UI logic safely.

## ✅ Why dependency array matters (2 lines)
Dependency array controls when the effect should run (once, always, or when a value changes).
If dependencies are wrong, it can cause unnecessary API calls or missing updates.

## ✅ Difference between useEffect(() => {}, []) and without []
useEffect(() => {}, []) runs only once when the component loads (mount).
useEffect(() => {}) runs after every render (runs again on every state update).

## ✅ What you built today (3 lines)
Built a User Directory where all users are fetched once on component mount using useEffect.
Implemented search by name using filter() and displayed matching users in a list using map().
Added loading and error UI states for better user experience.
