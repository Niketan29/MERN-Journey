## Pagination, Sorting & Filtering (Admin Users)

### Why pagination is mandatory
Pagination is mandatory because real databases can contain thousands of records, and returning all of them in one response is slow, memory-heavy, and unusable for the frontend. Pagination ensures performance, predictable responses, and a smooth user experience.

### How query params give frontend control
Query parameters allow the frontend to control pagination, sorting, and filtering without backend code changes. The frontend can decide which page to load, how many records to show, how data should be sorted, and which users to filter, while the backend safely translates these params into database queries.

### What edge cases you handled
- Converted query params from strings to numbers
- Prevented negative or zero values for page and limit
- Removed pagination and sorting fields from filters
- Safely converted gte/lte into MongoDB operators
- Ensured password field is never returned
- Counted total documents based on filters, not pagination

### What broke your brain today 
Understanding why `req.user` must be used instead of `req.body` for authenticated routes and how filtering works by converting query strings into MongoDB operators was confusing at first, but it finally clicked how backend security and query safety actually work.
