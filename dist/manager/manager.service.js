"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ManagerService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const crypto = require("crypto");
const mongoose_2 = require("mongoose");
const accesstoken_schema_1 = require("../schemas/accesstoken.schema");
const fooditem_schema_1 = require("../schemas/fooditem.schema");
const meal_schema_1 = require("../schemas/meal.schema");
const mealtoken_schema_1 = require("../schemas/mealtoken.schema");
const rawmaterial_schema_1 = require("../schemas/rawmaterial.schema");
const user_schema_1 = require("../schemas/user.schema");
let ManagerService = class ManagerService {
    constructor(accessTokenModel, foodItemModel, mealModel, mealTokenModel, rawMaterialModel, userModel) {
        this.accessTokenModel = accessTokenModel;
        this.foodItemModel = foodItemModel;
        this.mealModel = mealModel;
        this.mealTokenModel = mealTokenModel;
        this.rawMaterialModel = rawMaterialModel;
        this.userModel = userModel;
    }
    async createUser(kerberos, name, hostel) {
        const check = await this.userModel.findOne({ kerberos: kerberos });
        if (check) {
            return null;
        }
        const doc = new this.userModel({
            kerberos: kerberos,
            name: name,
            hostel: hostel,
            isActive: true,
        });
        return doc.save();
    }
    async getUsers() {
        const doc = await this.userModel.find();
        return doc.map((d) => ({
            id: d.id,
            name: d.name,
            hostel: d.hostel,
            kerberos: d.kerberos,
            isActive: d.isActive
        }));
    }
    async createAccessToken(kerberos, scope) {
        const u = await this.userModel.findOne({ kerberos: kerberos }).select('_id');
        if (!u) {
            return null;
        }
        scope = scope || 'full';
        const seed = crypto.randomUUID() + kerberos + new Date().toDateString;
        const token = crypto.createHash('sha256').update(seed).digest('hex');
        const doc = new this.accessTokenModel({
            user_id: u,
            token: token,
            created_time: new Date(),
            isActive: true,
            scope: scope,
        });
        return doc.save();
    }
    async getAccessTokens(kerberos) {
        const u = await this.userModel.findOne({ kerberos: kerberos }).select('_id');
        if (!u) {
            return null;
        }
        return this.accessTokenModel.find({ user_id: u });
    }
    async createMeal(mess, name, start_time, end_time, capacity, price, fooditem_ids) {
        if (end_time < start_time) {
            return null;
        }
        const doc = new this.mealModel({
            mess: mess,
            name: name,
            start_time: start_time,
            end_time: end_time,
            capacity: capacity,
            price: price,
            fooditem_ids: fooditem_ids,
        });
        return doc.save();
    }
    async getMeals(limit, date) {
        date = date || new Date();
        if (limit === 0) {
            return this.mealModel.find({
                end_time: { $gt: date },
                start_time: { $lt: date },
            });
        }
        else if (limit > 0) {
            return this.mealModel.find({ end_time: { $gt: date } }).limit(limit);
        }
        else {
            return this.mealModel
                .find({ start_time: { $lt: date } })
                .limit(0 - limit);
        }
    }
    async createMealToken(kerberos, meal_id, status) {
        status = status || 'BOOKED';
        const u = await this.userModel.findOne({ kerberos: kerberos }).select('_id');
        const m = await this.mealModel.findById(meal_id).select('_id');
        if (!u || !m) {
            return null;
        }
        const doc = new this.mealTokenModel({
            user_id: u,
            meal_id: m,
            status: status,
        });
        return doc.save();
    }
    async bulkCreateMealToken(meal_id, status) {
        status = status || 'BOOKED';
        const m = await this.mealModel.findById(meal_id).select('_id');
        if (!m) {
            return null;
        }
        const users = await this.userModel.find({ isActive: true }).select('_id');
        const doc = users.map(u => new this.mealTokenModel({ user_id: u, meal_id: m, status: status }));
        return this.mealTokenModel.insertMany(doc);
    }
    async getMealTokens(kerberos, meal_id) {
        if (kerberos && meal_id) {
            return this.mealTokenModel.find({ kerberos: kerberos, meal_id: meal_id });
        }
        else if (kerberos) {
            return this.mealTokenModel.find({ kerberos: kerberos });
        }
        else if (meal_id) {
            return this.mealTokenModel.find({ meal_id: meal_id });
        }
    }
};
ManagerService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(accesstoken_schema_1.AccessToken.name)),
    __param(1, (0, mongoose_1.InjectModel)(fooditem_schema_1.FoodItem.name)),
    __param(2, (0, mongoose_1.InjectModel)(meal_schema_1.Meal.name)),
    __param(3, (0, mongoose_1.InjectModel)(mealtoken_schema_1.MealToken.name)),
    __param(4, (0, mongoose_1.InjectModel)(rawmaterial_schema_1.RawMaterial.name)),
    __param(5, (0, mongoose_1.InjectModel)(user_schema_1.User.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model])
], ManagerService);
exports.ManagerService = ManagerService;
//# sourceMappingURL=manager.service.js.map