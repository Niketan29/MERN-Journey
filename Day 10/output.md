## What is Outlet? (2 lines)
`Outlet` is a component from React Router DOM used in layout components to render child routes.  
It acts like a placeholder where nested route pages (Profile, Settings, etc.) will display.

## Why nested routes are useful? (2 lines)
Nested routes help us organize routes in a clean structure like parent → child routes.  
They allow sharing common UI (Navbar/Layout) while only changing the inside content.

## What does useNavigate do? (2 lines)
`useNavigate()` is a hook used to navigate programmatically without using Link/NavLink.  
It is useful for redirects like after login, button click, or going back to previous page.

## What you built today (3 lines)
I created a MainLayout with Navbar and used Outlet to show different pages inside it.  
I built nested routing for Dashboard with Profile and Settings using Outlet.  
I used `useNavigate()` to go from Users list to UserDetails page dynamically.
