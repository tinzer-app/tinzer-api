import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConditionSchema } from '../../schemas/condition.schema';
import { ConditionsController } from './conditions.controller';
import { ConditionsService } from './conditions.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Condition', schema: ConditionSchema }]),
  ],
  controllers: [ConditionsController],
  providers: [ConditionsService],
})
export class ConditionsModule {}
