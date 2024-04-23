import 'dotenv/config';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { ProjectsModule } from './scenes/projects/projects.module';
import { ConditionsModule } from './scenes/conditions/conditions.module';
import { InspectionsModule } from './scenes/inspections/inspections.module';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGODB_URL),
    ProjectsModule,
    ConditionsModule,
    InspectionsModule,
  ],
})
export class AppModule {}
