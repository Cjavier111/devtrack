import type { Task } from "./types.js";
import {createTask, deleteTask, listTasks, completeTask, tasks} from "./tasks.js";

createTask("Task A");
createTask("Task B");
createTask("Task C");

console.log("Starting:");
listTasks();

deleteTask(2);

console.log("\nAfter deleting ID 2:");
listTasks();

createTask("Task D");

console.log("\nAfter creating another task:");
listTasks();