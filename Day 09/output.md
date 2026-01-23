## What is client-side routing? (2 lines)
Client-side routing means changing pages in a React app without reloading the whole browser page.  
React Router updates the UI by switching components based on the URL path.

## Difference between Link and a tag (2 lines)
`<a>` tag reloads the full page and makes a new request to the server.  
`<Link>` changes route without reload (SPA navigation) and keeps React state.

## What is useParams? (2 lines)
`useParams()` is a React Router hook used to read dynamic URL parameters like `:id`.  
It helps us fetch/show data based on the current route parameter.

## What you built today (3 lines)
I built a React app using React Router DOM with Home, Users, and NotFound pages.  
I created dynamic routing `/users/:id` and fetched user details using `useParams()`.  
I added navigation using `NavLink` with active styling and links between pages.
