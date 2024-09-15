import { Args, Int, Mutation, Query, Resolver } from "@nestjs/graphql";
import { ProjectsService } from "./projects.service";
import { Project } from "./entities/project.entities";

/* В resolver описываются все CRUD запросы  */

@Resolver()
export class ProjectsResolver {
  constructor(private readonly projectsService: ProjectsService) {}

  @Query(() => [Project], { name: "projects" })
  async getAllProjects(): Promise<Project[]> {
    return this.projectsService.getAllProjects();
  }

  @Mutation(() => Project)
  async createProject(
    @Args("title") title: string,
    @Args("description") description: string,
    @Args("logo") logo: string,
    @Args("link") link: string,
  ): Promise<Project> {
    return this.projectsService.create({
      title,
      description,
      logo,
      link,
    });
  }

  @Mutation(() => Boolean)
  async deleteProject(@Args("id") id: string): Promise<boolean> {
    await this.projectsService.delete(+id);
    return true;
  }

  @Mutation(() => Project, { name: "updateProject" })
  async updateJobById(
    @Args("id", { type: () => Int }) id: number,
    @Args("title", { type: () => String }) title: string,
    @Args("description", { type: () => String }) description: string,
    @Args("link", { type: () => String }) link: string,
    @Args("logo", { type: () => String }) logo: string,
  ): Promise<Project> {
    const updatedData: Partial<Project> = { title, description, link, logo };
    return this.projectsService.updateProjectById(id, updatedData);
  }
}
