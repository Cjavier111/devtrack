
export {createTask, deleteTask, listTasks, completeTask, tasks};
import type {Task} from "./types.js";

const tasks: Task[] = []; 



const task: Task = {
    id: 1, 
    title: "Learn TypeScript",
    description: "Finish task management functionality",
    completed: false
    
}; 

function createTask(title:string): Task {
    let largestid = 0 
    for (const task of tasks){
        if (task.id > largestid){
        largestid = task.id 
    }}
    const id = largestid + 1 
    const newTask: Task = {
        id: id, 
        title: title,
        completed: false,
    };
    tasks.push (newTask);

    return newTask

}


function listTasks(): void {
    for (const task of tasks) {
         const status = task.completed ? " [x] " : " [ ] ";
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