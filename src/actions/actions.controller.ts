import { Controller, Get } from '@nestjs/common';
import { ActionInterface } from './models/action.interface';
import { ActionsService } from './actions.service';

@Controller('actions')
export class ActionsController {
  constructor(private actionsService: ActionsService) {}

  @Get()
  getActions(): ActionInterface[] {
    return this.actionsService.getActions();
  }
}
