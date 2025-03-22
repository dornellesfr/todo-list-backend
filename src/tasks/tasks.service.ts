import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tasks } from './tasks.entity';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Tasks)
    private tasksRepository: Repository<Tasks>,
  ) {}

  findAll(): Promise<Tasks[]> {
    return this.tasksRepository.find();
  }

  create(task: Partial<Tasks>): Promise<Tasks> {
    return this.tasksRepository.save(task);
  }
}
