import { Injectable } from "@nestjs/common";
import { JobsRepository } from "./job.repository";
import { Job } from "./entities";

@Injectable()
export class JobService {
  constructor(private jobRepository: JobsRepository) {}

  getAllJobs() {
    return this.jobRepository.findAll();
  }

  async getJobById(id: number): Promise<Job> {
    return this.jobRepository.getJobById(id);
  }

  async updateJobById(id: number, updatedData: Partial<Job>): Promise<Job> {
    const job = await this.jobRepository.getJobById(id);
    console.log(job);
    if (!job) {
      throw new Error(`There is no job with id ${id}`);
    }
    return this.jobRepository.updateJobById(id, updatedData);
  }
}
