import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { JobResolver } from "./job.resolver";
import { Job } from "./entities/job.entitites";
import { JobService } from "./job.service";
import { JobsRepository } from "./job.repository";

@Module({
  imports: [TypeOrmModule.forFeature([Job])],
  providers: [JobResolver, JobService, JobsRepository],
})
export class JobModule {}
