import { Module } from '@nestjs/common';
import { ActionsController } from './actions.controller';
import { ActionsService } from './actions.service';
import { DatabaseService } from '../core/services/airtable/database.service';

@Module({
  controllers: [ActionsController],
  providers: [ActionsService, DatabaseService],
})
export class ActionsModule {}
