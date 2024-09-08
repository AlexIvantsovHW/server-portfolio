import { Module } from "@nestjs/common";
import { JobService } from "./job.service";
import { JobResolver } from "./job.resolver";
import { JobController } from "./job.controller";

@Module({
  providers: [JobResolver, JobService],
  controllers: [JobController],
})
export class JobModule {}
