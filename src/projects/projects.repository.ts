import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Project } from "./entities/project.entities";
import { Repository } from "typeorm";
/*
 Слой доступа к данным отвечает за взаимодействие с базой данных или другими источниками данных. 
Этот слой реализуется через репозитории (Repositories).
Репозитории: Управляют взаимодействием с базой данных, 
предоставляя методы для выполнения CRUD операций (создание, чтение, обновление, удаление данных). 
*/
@Injectable()
export class ProjectsRepository {
  constructor(
    @InjectRepository(Project)
    private projectOrmRepository: Repository<Project>,
  ) {}

  async findAll(): Promise<Project[]> {
    return this.projectOrmRepository.find();
  }
  async findOne(id: number): Promise<Project | null> {
    return this.projectOrmRepository.findOne({ where: { id } });
  }
  async create(project: Partial<Project>) {
    return (project = this.projectOrmRepository.create(project));
  }
  async save(project: Project): Promise<Project> {
    return this.projectOrmRepository.save(project);
  }
  async remove(project: Project): Promise<void> {
    await this.projectOrmRepository.remove(project);
  }
  async updateById(
    id: number,
    updatedData: Partial<Project>,
  ): Promise<Project> {
    const project = await this.projectOrmRepository.findOne({ where: { id } });
    if (!project) throw new Error(`Project with id ${id} does not exist!`);
    await this.projectOrmRepository.merge(project, updatedData);
    const updatedProject = await this.projectOrmRepository.save(project);

    return updatedProject;
  }
}
