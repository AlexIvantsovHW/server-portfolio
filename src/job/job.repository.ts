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

  async findAll(): Promise<Job[]> {
    return this.jobsOrmRepository.find();
  }

  async getJobById(id: number): Promise<Job> {
    const job = await this.jobsOrmRepository.findOne({ where: { id } });
    if (!job) {
      throw new NotFoundException(`Job with id ${id} not found`);
    }
    return job;
  }

  async updateJobById(id: number, updateData: Partial<Job>): Promise<Job> {
    const job = await this.getJobById(id);
    this.jobsOrmRepository.merge(job, updateData);
    const updatedJob = await this.jobsOrmRepository.save(job);

    return updatedJob;
  }
}
