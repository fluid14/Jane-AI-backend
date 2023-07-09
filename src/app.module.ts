import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ActionsModule } from './actions/actions.module';

@Module({
  imports: [ActionsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}