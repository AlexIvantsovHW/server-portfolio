/* 
Создание DTO для входных данных
Создайте Data Transfer Object (DTO) для передачи данных при создании нового проекта:
*/
import { Field, InputType, Int } from "@nestjs/graphql";

@InputType()
export class ProjectDto {
  @Field() title: string;
  @Field() description: string;
  @Field() logo: string;
  @Field() link: string;
}
