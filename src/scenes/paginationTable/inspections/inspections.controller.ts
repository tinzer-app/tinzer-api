import { Controller, Post } from '@nestjs/common';

import { InspectionsService } from './inspections.service';

@Controller()
export class InspectionsController {
  constructor(private readonly inspectionsService: InspectionsService) {}

  @Post('/inspections')
  getData() {
    return this.inspectionsService.getData();
  }
}
