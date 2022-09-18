import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import CONFIG from './config';

@Module({
  imports: [MongooseModule.forRoot(CONFIG.MONGODB_STRING)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
