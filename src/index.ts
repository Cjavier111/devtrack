import type { Task } from "./types.js";
import {createTask, deleteTask, listTasks, completeTask, tasks} from "./tasks.js";

createTask("Learn TypeScript");
createTask("Build DevTrack");
createTask("Practice Git");

listTasks();

completeTask(1);

console.log("\nAfter completing task:\n");

listTasks();

deleteTask(2);

console.log("\nAfter deleting task:\n");

listTasks();