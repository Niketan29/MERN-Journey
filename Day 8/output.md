# Day 8 Report — useEffect & API Fetching

## ✅ What is useEffect (2 lines)
`useEffect` is a React Hook used to run side effects like API calls, localStorage updates, timers, or event listeners.
It runs after the component renders and helps manage non-UI logic in React.

## ✅ Why dependency array matters (2 lines)
The dependency array controls when the effect should run (on load, on every render, or when a specific state/prop changes).
Without correct dependencies, effects can run too many times or not run when needed.

## ✅ Difference between useEffect(() => {}, []) and without []
`useEffect(() => {}, [])` runs only once when the component mounts (page load).
`useEffect(() => {})` runs after every render, meaning it runs again whenever state changes.

## ✅ What you built today (3 lines)
Built a User Directory component using search input and `useEffect` to fetch user data from API.
Implemented live search using controlled input with `useState` and fetched data using a separate `fetchApi` service file.
Displayed user details conditionally after fetching and handled empty search by clearing the result.
