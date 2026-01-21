const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const totalCount = document.getElementById("totalCount");
const completedCount = document.getElementById("completedCount");
const pendingCount = document.getElementById("pendingCount");
const taskList = document.getElementById("taskList");

let tasks = [];
let currentFilter = "all";

const saveTasks = () => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

const loadTasks = () => {
  const saved = localStorage.getItem("tasks");
  tasks = saved ? JSON.parse(saved) : [];
};

const renderTask = () => {
  taskList.innerHTML = "";

  let filteredTask = tasks;

  if (currentFilter === "completed") {
    filteredTask = tasks.filter((task) => task.completed);
  } else if (currentFilter === "pending") {
    filteredTask = tasks.filter((task) => !task.completed);
  }

  filteredTask.forEach((task) => {
    const li = document.createElement("li");

    li.className = task.completed ? "task completed" : "task";

    li.innerHTML = `
      <span>${task.text}</span>
      <div>
        <button class="completeBtn" data-id="${task.id}">
          ${task.completed ? "Undo" : "Complete"}
        </button>
        <button class="deleteBtn" data-id="${task.id}">
          Delete
        </button>
      </div>
    `;

    taskList.appendChild(li);
  });

  updateCounter();
};

const updateCounter = () => {
  totalCount.textContent = tasks.length;

  const completed = tasks.filter((task) => task.completed).length;
  completedCount.textContent = completed;

  pendingCount.textContent = tasks.length - completed;
};

addBtn.addEventListener("click", () => {
  const text = taskInput.value.trim();

  if (text === "") return;

  const newTask = {
    id: Date.now(),
    text: text,
    completed: false,
  };

  tasks.push(newTask);
  taskInput.value = "";

  saveTasks();
  renderTask();
});

taskList.addEventListener("click", (e) => {
  const id = Number(e.target.dataset.id);

  if (e.target.classList.contains("completeBtn")) {
    tasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
  }

  if (e.target.classList.contains("deleteBtn")) {
    tasks = tasks.filter((task) => task.id !== id);
  }

  saveTasks();
  renderTask();
});

document.querySelectorAll(".filterBtn").forEach((btn) => {
  btn.addEventListener("click", () => {
    currentFilter = btn.dataset.filter;
    renderTask();
  });
});

loadTasks();
renderTask();
