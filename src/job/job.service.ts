import { Injectable } from "@nestjs/common";
import { JobsRepository } from "./job.repository";

@Injectable()
export class JobService {
  constructor(private jobRepository: JobsRepository) {}
  getAllJobs() {
    return this.jobRepository.findAll();
  }
  getJobById(id: number) {
    return this.jobRepository.getJobById(id);
  }
}
