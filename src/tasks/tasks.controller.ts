import { Controller, Delete, Get, Post, Put, Patch, Body, Query, Param } from "@nestjs/common";
import { TasksService } from "./tasks.service";
import { CreateTaskDto } from "./dto/create-task.dto";
import { ApiTags } from "@nestjs/swagger";


@Controller("/tasks")

export class TaskContoller{

  constructor(private tasksService: TasksService){}

  @ApiTags("taks")
  @Get()
  getAllTasks(@Query() query: any){
    console.log(query);
    
    return this.tasksService.getTasks();
  }
  
  @ApiTags("taks")
  @Get("/:id")
  getTask(@Param("id") id: string){
    return this.tasksService.getTask(parseInt(id));
  }
  
  @ApiTags("taks")
  @Post()
  createTask(@Body() task: CreateTaskDto){
    return this.tasksService.createTask(task);
  }
  
  @ApiTags("taks")
  @Put()
  updateTask(){
    return this.tasksService.updateTask();
  }
  
  @ApiTags("taks")
  @Delete()
  deleteTask(){
    return this.tasksService.deleteTask();
  }
  
  @ApiTags("taks")
  @Patch()
  updateStatusTask(){
    return this.tasksService.updateStatusTask();
  }
}