import {Module} from "@nestjs/common"
import { TaskContoller } from "./tasks.controller";
import { TasksService } from "./tasks.service";

@Module({
  controllers: [TaskContoller],
  providers: [TasksService],
})

export class TasksModule{}