import { ObjectType, Field, Int } from "@nestjs/graphql";

@ObjectType()
export class Job {
  @Field(() => Int)
  id: number;

  @Field()
  title: string;

  @Field()
  description: string;
}
