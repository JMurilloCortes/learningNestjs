import { Controller, Delete, Get, Post, Put, Patch } from "@nestjs/common";
import { TasksService } from "./tasks.service";


@Controller("/tasks")

export class TaskContoller{

  constructor(private tasksService: TasksService){}

  @Get()
  getAllTasks(){
    return this.tasksService.getTasks();
  }
  @Post()
  createTask(){
    return this.tasksService.createTask();
  }
  @Put()
  updateTask(){
    return this.tasksService.updateTask();
  }
  @Delete()
  deleteTask(){
    return this.tasksService.deleteTask();
  }
  @Patch()
  updateStatusTask(){
    return this.tasksService.updateStatusTask();
  }
}