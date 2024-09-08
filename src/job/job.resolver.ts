import { Job } from "./entities/job.entitites";
import { Resolver, Query } from "@nestjs/graphql";
@Resolver(() => Job)
export class JobResolver {
  @Query(() => [Job], { name: "jobs" })
  getJobs(): Job[] {
    return [
      {
        id: 1,
        title: "Software Developer",
        description: "Develops software solutions.",
      },
      {
        id: 2,
        title: "Project Manager",
        description: "Manages project timelines and deliverables.",
      },
    ];
  }
}
