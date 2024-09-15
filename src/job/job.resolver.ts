import { Resolver, Query, Mutation, Args, Int } from "@nestjs/graphql";
import { JobService } from "./job.service";
import { Job } from "./entities/job.entitites";

@Resolver(() => Job)
export class JobResolver {
  constructor(private readonly jobService: JobService) {}

  @Query(() => [Job], { name: "jobs" })
  async getAllJobs(): Promise<Job[]> {
    return this.jobService.getAllJobs();
  }

  @Query(() => Job, { name: "job" })
  async getJobById(@Args("id", { type: () => Int }) id: number): Promise<Job> {
    return this.jobService.getJobById(id);
  }

  @Mutation(() => Job, { name: "updateJob" })
  async updateJobById(
    @Args("id", { type: () => Int }) id: number,
    @Args("title", { type: () => String }) title: string,
    @Args("description", { type: () => String }) description: string,
  ): Promise<Job> {
    const updatedData: Partial<Job> = { title, description };
    return this.jobService.updateJobById(id, updatedData);
  }
}
