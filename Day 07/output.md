# Day 7 Report — React Forms & useState

## ✅ What is useState? (2 lines)
`useState` is a React Hook used to create and manage state inside functional components.
It gives a state value and a function to update that value.

## ✅ What are controlled components? (2 lines)
Controlled components are form inputs whose value is controlled by React state.
We use `value` and `onChange` to sync the input with state.

## ✅ What happens when state changes in React? (2 lines)
When state changes, React re-renders the component to update the UI with new values.
Only the parts affected by state changes are updated efficiently using React’s virtual DOM.

## ✅ What you built today (3 lines)
Built a React registration form using `useState` for fullName, email, role, and bio fields.
Implemented controlled inputs with a common `handleChange` function using input `name`.
Added form validation, submit handling, reset functionality, and printed user object in console.
