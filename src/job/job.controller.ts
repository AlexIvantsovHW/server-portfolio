import { Controller, Get } from "@nestjs/common";
import { JobService } from "./job.service";

@Controller("job")
export class JobController {
  constructor(private readonly jobsService: JobService) {}
  @Get()
  async allJobs() {
    return [{ id1: 1, title: "K-digital", description: "Frontend" }];
  }
}
