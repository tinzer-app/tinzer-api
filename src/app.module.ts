import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { MongooseModule } from '@nestjs/mongoose';
import { ProjectsModule } from './scenes/projects/projects.module';
import 'dotenv/config';

import {
  ConditionsController,
  ConditionsService,
  InspectionsController,
  InspectionsService,
  ModalSearchController,
  ModalSearchService,
  //ProjectsController,
  //ProjectsService,
} from './scenes';

import * as process from 'process';
import { ConditionsModule } from "./scenes/conditions/conditions.module";

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'client'),
      exclude: ['/api/(.*)'],
    }),
    // MongooseModule.forRoot('mongodb://localhost:27017'),
    MongooseModule.forRoot(process.env.MONGO_URI),
    ProjectsModule,
    ConditionsModule,
  ],
  controllers: [
    //ProjectsController,
    //ConditionsController,
    InspectionsController,
    ModalSearchController,
  ],
  providers: [
    //ProjectsService,
    //ConditionsService,
    InspectionsService,
    ModalSearchService,
  ],
})
export class AppModule {}
