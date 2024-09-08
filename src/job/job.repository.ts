import { Injectable, NotFoundException } from "@nestjs/common";
import { Job } from "./entities/job.entitites";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

@Injectable()
export class JobsRepository {
  constructor(
    @InjectRepository(Job)
    private jobsOrmRepository: Repository<Job>,
  ) {}

  // Создание нового объекта Job
  /*   create(job: Partial<Job>): Job {
    return this.jobsOrmRepository.create(job);
  } */

  // Сохранение объекта Job
  /* async save(job: Job): Promise<Job> {
    return this.jobsOrmRepository.save(job);
  } */

  // Поиск всех объектов Job
  async findAll(): Promise<Job[]> {
    return this.jobsOrmRepository.find();
  }

  // Поиск Job по ID
  async getJobById(id: number): Promise<Job> {
    const job = await this.jobsOrmRepository.findOneBy({ id });
    if (!job) {
      throw new NotFoundException(`Job with id ${id} not found`);
    }
    return job;
  }

  // Удаление Job
  /*   async remove(job: Job): Promise<void> {
    await this.jobsOrmRepository.remove(job);
  } */
}
