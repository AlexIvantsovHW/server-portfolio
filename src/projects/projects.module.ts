import { Module } from "@nestjs/common";
import { ProjectsService } from "./projects.service";
import { ProjectsResolver } from "./projects.resolver";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Project } from "./entities/project.entities";
import { ProjectsRepository } from "./projects.repository";
/* Служат для организации приложения на функциональные единицы. */
@Module({
  providers: [ProjectsRepository, ProjectsResolver, ProjectsService],
  imports: [TypeOrmModule.forFeature([Project])],
})
export class ProjectsModule {}
