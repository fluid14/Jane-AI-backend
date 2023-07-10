import { Body, Controller, Delete, Get, Param, Res } from '@nestjs/common';
import { ActionInterface } from './models/action.interface';
import { ActionsService } from './actions.service';

@Controller('actions')
export class ActionsController {
  constructor(private actionsService: ActionsService) {}

  @Get()
  async getActions(): Promise<ActionInterface[]> {
    return (await this.actionsService.getActions()) as ActionInterface[];
  }

  @Delete('/:id')
  async deleteActions(@Param('id') id: string, @Res() res: Response) {
    console.log(id);
    await this.actionsService.deleteActions(id);
    res.send({ message: 'Action deleted' });
  }
}
