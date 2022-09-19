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

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: AccessToken.name, schema: AccessTokenSchema },
      { name: FoodItem.name, schema: FoodItemSchema },
      { name: Meal.name, schema: MealSchema },
      { name: MealToken.name, schema: MealTokenSchema },
      { name: RawMaterial.name, schema: RawMaterialSchema },
      { name: User.name, schema: UserSchema },
    ]),
  ],
  controllers: [ManagerController],
  providers: [ManagerService],
})
export class ManagerModule {}
