import { Injectable } from "@nestjs/common";

@Injectable()

export class TasksService {
  getTasks() {
    return ["Task 1", "Task 2", "Task 3"]
  }
  createTask() {
    return "Creando tarea"
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