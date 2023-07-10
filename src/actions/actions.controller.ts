import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Res,
} from '@nestjs/common';
import { ActionInterface } from './models/action.interface';
import { ActionsService } from './actions.service';
import { Response } from 'express';
import { CreateActionDto } from './dtos/createAction.dto';

@Controller('actions')
export class ActionsController {
  constructor(private actionsService: ActionsService) {}

  @Get()
  async getActions(): Promise<ActionInterface[]> {
    return (await this.actionsService.getActions()) as ActionInterface[];
  }

  @Delete('/:id')
  async deleteActions(@Param('id') id: string, @Res() res: Response) {
    await this.actionsService.deleteActions(id);
    res.send({ message: 'Action deleted' });
  }

  @Post()
  async createAction(@Body() body: CreateActionDto, @Res() res: Response) {
    await this.actionsService.createAction(body);
    res.send({ message: 'Action created' });
  }

  @Put('/:id')
  async updateAction(
    @Param('id') id: string,
    @Body() fields: CreateActionDto,
    @Res() res: Response,
  ) {
    await this.actionsService.updateAction({ id, fields });
    res.send({ message: 'Action updated' });
  }
}
