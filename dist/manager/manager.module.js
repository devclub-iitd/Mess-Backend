"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ManagerModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const accesstoken_schema_1 = require("../schemas/accesstoken.schema");
const fooditem_schema_1 = require("../schemas/fooditem.schema");
const meal_schema_1 = require("../schemas/meal.schema");
const mealtoken_schema_1 = require("../schemas/mealtoken.schema");
const rawmaterial_schema_1 = require("../schemas/rawmaterial.schema");
const user_schema_1 = require("../schemas/user.schema");
const manager_controller_1 = require("./manager.controller");
const manager_service_1 = require("./manager.service");
let ManagerModule = class ManagerModule {
};
ManagerModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: accesstoken_schema_1.AccessToken.name, schema: accesstoken_schema_1.AccessTokenSchema },
                { name: fooditem_schema_1.FoodItem.name, schema: fooditem_schema_1.FoodItemSchema },
                { name: meal_schema_1.Meal.name, schema: meal_schema_1.MealSchema },
                { name: mealtoken_schema_1.MealToken.name, schema: mealtoken_schema_1.MealTokenSchema },
                { name: rawmaterial_schema_1.RawMaterial.name, schema: rawmaterial_schema_1.RawMaterialSchema },
                { name: user_schema_1.User.name, schema: user_schema_1.UserSchema },
            ]),
        ],
        controllers: [manager_controller_1.ManagerController],
        providers: [manager_service_1.ManagerService],
    })
], ManagerModule);
exports.ManagerModule = ManagerModule;
//# sourceMappingURL=manager.module.js.map