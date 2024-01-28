import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AccessToken, AccessTokenSchema } from 'src/schemas/accesstoken.schema';
import { FoodItem, FoodItemSchema } from 'src/schemas/fooditem.schema';
import { Meal, MealSchema } from 'src/schemas/meal.schema';
import { MealToken, MealTokenSchema } from 'src/schemas/mealtoken.schema';
import { RawMaterial, RawMaterialSchema } from 'src/schemas/rawmaterial.schema';
import { User, UserSchema } from 'src/schemas/user.schema';
import { ManagerController } from './manager.controller';
import { ManagerService } from './manager.service';
import { Rebate, RebateSchema } from 'src/schemas/rebate.schema';
import { MulterModule } from '@nestjs/platform-express';
import { Admin } from 'mongodb';
import { AdminSchema } from 'src/schemas/admin.schema';
import { Mess, MessSchema } from 'src/schemas/mess.schema';

@Module({
	imports: [
		MongooseModule.forFeature([
			{ name: AccessToken.name, schema: AccessTokenSchema },
			{ name: FoodItem.name, schema: FoodItemSchema },
			{ name: Mess.name, schema: MessSchema },
			{ name: Meal.name, schema: MealSchema },
			{ name: MealToken.name, schema: MealTokenSchema },
			{ name: RawMaterial.name, schema: RawMaterialSchema },
			{ name: User.name, schema: UserSchema },
			{ name: Rebate.name, schema: RebateSchema },
			{ name: Admin.name, schema: AdminSchema },
		]),
		MulterModule.register({ dest: './upload' }),
	],
	controllers: [ManagerController],
	providers: [ManagerService],
})
export class ManagerModule {}
