import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Admin, AdminSchema } from 'src/schemas/admin.schema';
import { LocalStrategy } from './passport/local.strategy';
import { Mess, MessSchema } from 'src/schemas/mess.schema';

@Module({
	imports: [
		MongooseModule.forFeature([
			{ name: Admin.name, schema: AdminSchema },
			{ name: Mess.name, schema: MessSchema },
		]),
	],
	providers: [AuthService, LocalStrategy],
	controllers: [AuthController],
})
export class AuthModule {}
