# Output — Task Tracker Project

## What I built today (3 lines)
- Built a Task Tracker mini project using pure HTML, CSS, and JavaScript.
- Implemented add task, delete task, toggle complete, and filter tasks (All/Completed/Pending).
- Added task counters and saved tasks using localStorage so they persist after refresh.

## What I learned (5 bullet points)
- How to manage tasks using an array of objects in JavaScript.
- How to use DOM manipulation (`createElement`, `innerHTML`, `appendChild`) to render dynamic UI.
- How to implement event delegation using a single event listener on the parent `<ul>`.
- How to use `dataset` (`data-id`) to identify and update/delete the correct task.
- How to store and load tasks using `localStorage` with `JSON.stringify()` and `JSON.parse()`.

## Biggest bug I faced and how I fixed it
- Bug: My task buttons were not working because `data-id` was not written correctly in the button HTML and I was checking the wrong class name in event delegation.
- Fix: Corrected the button markup to use `class="completeBtn"` and `data-id="${task.id}"`, and updated the click handler to check `completeBtn`/`deleteBtn` properly.
