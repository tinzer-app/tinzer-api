import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { InspectionSchema } from '../../schemas/inspection.schema';
import { InspectionsController } from './inspections.controller';
import { InspectionsService } from './inspections.service';
import { ConditionSchema } from '../../schemas/condition.schema';
import { ProjectSchema } from '../../schemas/project.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Inspection', schema: InspectionSchema },
      { name: 'Project', schema: ProjectSchema },
      { name: 'Condition', schema: ConditionSchema },
    ]),
  ],
  controllers: [InspectionsController],
  providers: [InspectionsService],
})
export class InspectionsModule {}
