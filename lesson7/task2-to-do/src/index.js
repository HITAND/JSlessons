import { initTodoListHandlers } from "./list/toDolist.js";
import { renderTasks } from "./list/render.js";
import { getTasksList } from "./list/taskGateway.js";
import './styles.scss'

document.addEventListener("DOMContentLoaded", () => {
  getTasksList().then(() => {
    renderTasks();
  });
  initTodoListHandlers();
});

// 1.Get data from server
// 2. Save data to front-end storage
