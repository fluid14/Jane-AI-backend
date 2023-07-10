import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../core/services/airtable/database.service';
import { ActionInterface } from './models/action.interface';

@Injectable()
export class ActionsService {
  constructor(private databaseService: DatabaseService) {}

  async getActions(): Promise<unknown[]> {
    const actions = await this.databaseService
      .connect('Resources')
      .select({
        filterByFormula: 'IF({category}="actions", "Continue", "")',
        fields: [
          'record_id',
          'userDescription',
          'description',
          'title',
          'icon',
          'url',
          'shortcut',
          'tags',
        ],
      })
      .all();

    return actions.map(({ fields }) => fields);
  }

  async deleteActions(records) {
    return await this.databaseService.connect('Resources').destroy(records);
  }
}
