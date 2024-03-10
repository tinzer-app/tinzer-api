import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

import {
  ConditionsController,
  ConditionsService,
  InspectionsController,
  InspectionsService,
  ModalSearchController,
  ModalSearchService,
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
    ModalSearchController,
  ],
  providers: [
    ProjectsService,
    ConditionsService,
    InspectionsService,
    ModalSearchService,
  ],
})
export class AppModule {}
