import { Injectable } from "@nestjs/common";

@Injectable()

export class TasksService {

  private tasks = []

  getTasks() {
    return this.tasks
  }
  getTask(id: number) {
    const taskFound = this.tasks.find(task => task.id === id)
    if(!taskFound){
      return "no se enontro la tarea especificada"
    }return taskFound

  }
  createTask(task: any) {
    console.log(task);
    this.tasks.push({
      ...task,
      id: this.tasks.length + 1,
    })
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