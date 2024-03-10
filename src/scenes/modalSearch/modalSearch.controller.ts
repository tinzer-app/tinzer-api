import { Controller, Post } from '@nestjs/common';

import { ModalSearchService } from './modalSearch.service';
import {
  MODAL_SEARCH_BASE_PART,
  MODAL_SEARCH_CONDITIONS_PART,
  MODAL_SEARCH_PROJECTS_PART,
} from './constants';

@Controller(MODAL_SEARCH_BASE_PART)
export class ModalSearchController {
  constructor(private readonly modalSearchService: ModalSearchService) {}

  @Post(MODAL_SEARCH_PROJECTS_PART)
  getProjectsData() {
    return this.modalSearchService.getProjectsData();
  }

  @Post(MODAL_SEARCH_CONDITIONS_PART)
  getConditionsData() {
    return this.modalSearchService.getConditionsData();
  }
}
