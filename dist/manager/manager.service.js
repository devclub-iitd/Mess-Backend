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
const admin_schema_1 = require("../schemas/admin.schema");
const fooditem_schema_1 = require("../schemas/fooditem.schema");
const meal_schema_1 = require("../schemas/meal.schema");
const mealtoken_schema_1 = require("../schemas/mealtoken.schema");
const rawmaterial_schema_1 = require("../schemas/rawmaterial.schema");
const rebate_schema_1 = require("../schemas/rebate.schema");
const user_schema_1 = require("../schemas/user.schema");
const parseExcel_1 = require("../utils/parseExcel");
let ManagerService = class ManagerService {
    constructor(accessTokenModel, adminModel, foodItemModel, mealModel, mealTokenModel, rawMaterialModel, userModel, rebateModel) {
        this.accessTokenModel = accessTokenModel;
        this.adminModel = adminModel;
        this.foodItemModel = foodItemModel;
        this.mealModel = mealModel;
        this.mealTokenModel = mealTokenModel;
        this.rawMaterialModel = rawMaterialModel;
        this.userModel = userModel;
        this.rebateModel = rebateModel;
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
            isActive: d.isActive,
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
        return this.accessTokenModel.find({ user_id: u }).populate('user_id');
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
            return this.mealModel.find({ start_time: { $gt: date } }).limit(limit);
        }
        else {
            return this.mealModel
                .find({ end_time: { $lt: date } })
                .sort({ end_time: -1 })
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
        const meal = await this.mealModel.findById(meal_id).select(['_id', 'end_time', 'start_time']);
        if (!meal) {
            return null;
        }
        const users = await this.userModel.find({ isActive: true }).select('_id');
        const rebates = await this.rebateModel
            .find({
            from_date: { $lt: meal.end_time },
            to_date: { $gt: meal.start_time },
        })
            .lean();
        const doc = users
            .filter((user) => !rebates.find((rebate) => String(rebate.user_id) === String(user._id)))
            .map((user) => new this.mealTokenModel({ user_id: user, meal_id: meal, status: status }));
        return this.mealTokenModel.insertMany(doc);
    }
    async getMealTokens(kerberos, meal_id) {
        if (kerberos && meal_id) {
            const u = await this.userModel.findOne({ kerberos: kerberos });
            return this.mealTokenModel.find({ user_id: u, meal_id: meal_id }).populate(['meal_id', 'user_id']);
        }
        else if (kerberos) {
            const u = await this.userModel.findOne({ kerberos: kerberos });
            return this.mealTokenModel.find({ user_id: u }).populate(['meal_id', 'user_id']);
        }
        else if (meal_id) {
            return this.mealTokenModel.find({ meal_id: meal_id }).populate(['meal_id', 'user_id']);
        }
    }
    async createRebate(kerberos, admin_id, rebate_application_no, from_date, to_date, approval_status, days, reason, type, amount) {
        const user = await this.userModel.findOne({ kerberos }).lean();
        if (!user)
            return 0;
        const admin = await this.adminModel.findById(admin_id).lean();
        if (!admin)
            return -1;
        const old = await this.rebateModel.findOne({ rebate_application_no });
        const meals = await this.mealModel.find({ start_time: { $gt: from_date }, end_time: { $lt: to_date } }).lean();
        await this.mealTokenModel.updateMany({
            user_id: user._id,
            meal_id: { $in: meals.map((meal) => meal._id) },
        }, { $set: { status: 'REBATE' } });
        const values = {
            user_id: user._id,
            admin_id: admin._id,
            rebate_application_no,
            from_date,
            to_date,
            days,
            approval_status,
            reason,
            type,
            amount,
        };
        if (old) {
            return old.updateOne(values);
        }
        const doc = new this.rebateModel(values);
        return doc.save();
    }
    async bulkCreateRebates(admin_id, file_path) {
        const data = (0, parseExcel_1.parseRebate)(file_path);
        const queries = data.map((row) => this.createRebate(row.kerberos, admin_id, row.rebate_application_no, row.from_date, row.to_date, row.approval_status, row.days, row.reason, row.type, row.amount));
        return Promise.all(queries);
    }
    async getRebates() {
        return this.rebateModel.find({}).populate('user_id');
    }
};
ManagerService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(accesstoken_schema_1.AccessToken.name)),
    __param(1, (0, mongoose_1.InjectModel)(admin_schema_1.Admin.name)),
    __param(2, (0, mongoose_1.InjectModel)(fooditem_schema_1.FoodItem.name)),
    __param(3, (0, mongoose_1.InjectModel)(meal_schema_1.Meal.name)),
    __param(4, (0, mongoose_1.InjectModel)(mealtoken_schema_1.MealToken.name)),
    __param(5, (0, mongoose_1.InjectModel)(rawmaterial_schema_1.RawMaterial.name)),
    __param(6, (0, mongoose_1.InjectModel)(user_schema_1.User.name)),
    __param(7, (0, mongoose_1.InjectModel)(rebate_schema_1.Rebate.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model])
], ManagerService);
exports.ManagerService = ManagerService;
//# sourceMappingURL=manager.service.js.map