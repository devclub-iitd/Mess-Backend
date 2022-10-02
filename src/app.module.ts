import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PassportModule } from '@nestjs/passport';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ManagerModule } from './manager/manager.module';
import { StaffModule } from './staff/staff.module';
import CONFIG from './config';

@Module({
	imports: [MongooseModule.forRoot(CONFIG.MONGODB_STRING), AuthModule, PassportModule, ManagerModule, StaffModule],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
