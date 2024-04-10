import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { MongooseModule } from '@nestjs/mongoose';
import { ProjectsModule } from './scenes/projects/projects.module';
import 'dotenv/config';

import {
  ModalSearchController,
  ModalSearchService,
} from './scenes';

import * as process from 'process';
import { ConditionsModule } from "./scenes/conditions/conditions.module";
import { InspectionsModule } from "./scenes/inspections/inspections.module";

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'client'),
      exclude: ['/api/(.*)'],
    }),
    MongooseModule.forRoot(process.env.MONGO_URI),
    ProjectsModule,
    ConditionsModule,
    InspectionsModule,
  ],
  controllers: [
    ModalSearchController,
  ],
  providers: [
    ModalSearchService,
  ],
})
export class AppModule {}