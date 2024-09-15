import { Injectable } from "@nestjs/common";
import { ProjectsRepository } from "./projects.repository";
import { Project } from "./entities/project.entities";
import { ProjectDto } from "./dto";

/*  Содержат бизнес-логику и используются контроллерами*/
@Injectable()
export class ProjectsService {
  constructor(private projectRepository: ProjectsRepository) {}
  getAllProjects() {
    return this.projectRepository.findAll();
  }

  async create(dto: ProjectDto): Promise<Project> {
    const project = this.projectRepository.create(dto);
    return this.projectRepository.save(await project);
  }
  async delete(id: number): Promise<boolean> {
    const project = this.projectRepository.findOne(id);
    if (!project) {
      throw new Error(`Project with id ${id} not found`);
    }

    await this.projectRepository.remove(await project);
    return true;
  }
  async updateProjectById(
    id: number,
    updatedData: Partial<Project>,
  ): Promise<Project> {
    const project = await this.projectRepository.findOne(id);
    if (!project)
      throw new Error(` Project with id ${id} does not exist in db!`);

    return this.projectRepository.updateById(id, updatedData);
  }
}
