import { Module } from '@nestjs/common';

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
