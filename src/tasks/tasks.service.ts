import { Injectable } from "@nestjs/common";

@Injectable()

export class TasksService {

  private tasks = []

  getTasks() {
    return this.tasks
  }
  createTask(task: any) {
    console.log(task);
    this.tasks.push(task)
    return task
  }
  updateTask() {
    return "Atualizando tarea"
  }
  deleteTask() {
    return "Eliminando tarea"
  }
  updateStatusTask() {
    return "Actualizando el estado de la tarea"
  }
 
}