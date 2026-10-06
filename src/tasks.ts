
export {createTask, deleteTask, listTasks, completeTask, tasks};
import type {Task} from "./types.ts";

const tasks: Task[] = []; 



const task: Task = {
    id: 1, 
    title: "Learn TypeScript",
    description: "Finish task management functionality",
    completed: false
    
}; 

function createTask(title:string): Task {
    const id = tasks.length + 1 
    const newTask: Task = {
        id: id, 
        title: title,
        completed: false,
    };
    tasks.push (newTask);

    return newTask

}

// function listTasks(): void {
//     for (const task of tasks)
//         if (task.completed) {
//             console.log (task.id + " [x] " + task.title)
//         }
//                 else {
//                     console.log (task.id + " [ ] " + task.title)
//                 }


// }

function listTasks(): void {
    for (const task of tasks) {
         const status = task.completed ? " [x] " : "[ ]";
    console.log(task.id + status + task.title)


}}

function completeTask (id: number): boolean {
    const task = tasks.find(task => task.id === id)
        if (task === undefined) {
            return false; 
        }
        
        task.completed = true 
        return true 
}

function deleteTask (id:number): boolean {
     const index = tasks.findIndex(element => element.id === id)
        if (index === -1) {
            return false; 
        }
     
     tasks.splice (index, 1)
     return true 
        
}