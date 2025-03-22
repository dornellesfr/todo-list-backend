import { Body, Controller, Get, Post } from '@nestjs/common';
import { Tasks } from './tasks.entity';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  findAll(): Promise<Tasks[]> {
    return this.tasksService.findAll();
  }

  @Post()
  create(@Body() tasks: Partial<Tasks>): Promise<Tasks> {
    return this.tasksService.create(tasks);
  }
}
