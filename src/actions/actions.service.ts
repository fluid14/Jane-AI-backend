import { Injectable } from '@nestjs/common';
import { ActionInterface } from './models/action.interface';

@Injectable()
export class ActionsService {
  getActions(): ActionInterface[] {
    return [
      {
        icon: 'music',
        tags: 'muzyka, spotify',
        description: 'włącz muzykę na spotify',
        shortcut: 'Cmd+Shift+M',
        title: 'Muzyka na spotify',
        userDescription: 'test123 123',
        record_id: 'reci9smtnfbC2c4Ko',
      },
      {
        icon: 'music',
        tags: 'muzyka, spotify',
        description: 'włącz muzykę na spotify',
        shortcut: 'Cmd+Shift+M',
        title: 'Muzyka na spotify',
        userDescription: 'test123 123',
        record_id: 'reci9smtnfbC2c4Ko',
      },
    ];
  }
}
