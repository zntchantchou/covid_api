import { Module } from "@nestjs/common";
import { databaseProviders } from "./database.providers";
import { DatabaseUtils } from "./database.utils";

@Module({
  providers: [...databaseProviders, DatabaseUtils],
  exports: [...databaseProviders, DatabaseUtils]
})

export class DatabaseModule {} 