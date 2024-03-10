import { Controller, Post } from '@nestjs/common';

import { ConditionsService } from './conditions.service';

@Controller()
export class ConditionsController {
  constructor(private readonly conditionsService: ConditionsService) {}

  @Post('/conditions')
  getData() {
    return this.conditionsService.getData();
  }
}
