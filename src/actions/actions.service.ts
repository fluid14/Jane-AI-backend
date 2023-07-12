import { Body, Injectable } from '@nestjs/common';
import { DatabaseService } from '../core/services/airtable/database.service';

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

  async createAction(@Body() fields) {
    return await this.databaseService.connect('Resources').create([{ fields }]);
  }

  async updateAction(payload) {
    await this.databaseService.connect('Resources').update([payload]);
  }
}
