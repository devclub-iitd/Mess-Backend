import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AccessToken, AccessTokenSchema } from 'src/schemas/accesstoken.schema';
import { Meal, MealSchema } from 'src/schemas/meal.schema';
import { MealToken, MealTokenSchema } from 'src/schemas/mealtoken.schema';
import { User, UserSchema } from 'src/schemas/user.schema';
import { StaffController } from './staff.controller';
import { StaffService } from './staff.service';
import { Mess, MessSchema } from 'src/schemas/mess.schema';

@Module({
	imports: [
		MongooseModule.forFeature([
			{ name: User.name, schema: UserSchema },
			{ name: AccessToken.name, schema: AccessTokenSchema },
			{ name: Mess.name, schema: MessSchema },
			{ name: MealToken.name, schema: MealTokenSchema },
			{ name: Meal.name, schema: MealSchema },
		]),
	],
	controllers: [StaffController],
	providers: [StaffService],
})
export class StaffModule {}
