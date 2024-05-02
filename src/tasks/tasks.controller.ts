import { Controller, Delete, Get, Post, Put, Patch, Body, Query } from "@nestjs/common";
import { TasksService } from "./tasks.service";


@Controller("/tasks")

export class TaskContoller{

  constructor(private tasksService: TasksService){}

  @Get()
  getAllTasks(@Query() query: any){
    console.log(query);
    
    return this.tasksService.getTasks();
  }

  @Post()
  createTask(@Body() task: any){
    return this.tasksService.createTask(task);
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