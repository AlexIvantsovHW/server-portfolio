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

  /* @Mutation(() => Job)
  async createJob(
    @Args("title") title: string,
    @Args("description") description: string,
  ): Promise<Job> {
    return this.jobService.createJob({
      title,
      description,
    });
  } */

  /* @Mutation(() => Job)
  async deleteJob(@Args("id", { type: () => Int }) id: number): Promise<Job> {
    return this.jobService.deleteJob(id);
  } */
}
