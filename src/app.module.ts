import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";

import { GraphQLModule } from "@nestjs/graphql";
import { join } from "path";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { JobModule } from "./job/job.module";

@Module({
  imports: [
    JobModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true, // or path to your schema file if you have one
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
