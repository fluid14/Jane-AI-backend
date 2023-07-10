import * as Airtable from 'airtable';
import { ConfigService } from '@nestjs/config';
import { Injectable } from '@nestjs/common';

@Injectable()
export class DatabaseService {
  constructor(private configService: ConfigService) {}

  connect(base: string) {
    Airtable.configure({
      endpointUrl: this.configService.get<string>('DATABASE_URL'),
      apiKey: this.configService.get<string>('DATABASE_API_KEY'),
    });

    return Airtable.base(this.configService.get('DATABASE_BASE'))(base);
  }
}
