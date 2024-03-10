import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

import {
  ConditionsController,
  ConditionsService,
  InspectionsController,
  InspectionsService,
  ProjectsController,
  ProjectsService,
} from './scenes';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'client'),
      exclude: ['/api/(.*)'],
    }),
  ],
  controllers: [
    ProjectsController,
    ConditionsController,
    InspectionsController,
  ],
  providers: [ProjectsService, ConditionsService, InspectionsService],
})
export class AppModule {}
