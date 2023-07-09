import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ActionsModule } from './actions/actions.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), ActionsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
