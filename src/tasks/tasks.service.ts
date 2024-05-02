import { Injectable, HttpCode, NotFoundException } from "@nestjs/common";
import { CreateTaskDto } from "./dto/create-task.dto";

@Injectable()

export class TasksService {

  private tasks = []

  getTasks() {
    return this.tasks
  }
  getTask(id: number) {
    const taskFound = this.tasks.find(task => task.id === id)
    if(!taskFound){
      // return "No se enontro la tarea especificada"
      // throw new Error("Tarea no encontrada")
      return new NotFoundException(`La tares con id ${id} no fue enontrada`)
    }return taskFound

  }
  createTask(task: CreateTaskDto) {
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