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
exports.StaffService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const accesstoken_schema_1 = require("../schemas/accesstoken.schema");
const meal_schema_1 = require("../schemas/meal.schema");
const mealtoken_schema_1 = require("../schemas/mealtoken.schema");
const user_schema_1 = require("../schemas/user.schema");
let StaffService = class StaffService {
    constructor(userModel, accessTokenModel, mealTokenModel, mealModel) {
        this.userModel = userModel;
        this.accessTokenModel = accessTokenModel;
        this.mealTokenModel = mealTokenModel;
        this.mealModel = mealModel;
    }
    async verifyToken(kerberos, token) {
        const accessTokens = await this.accessTokenModel.aggregate([
            { $match: { token: token } },
            {
                $lookup: {
                    from: 'users',
                    as: 'users',
                    localField: 'user_id',
                    foreignField: '_id',
                    let: { token_user_id: '$user_id' },
                    pipeline: [
                        {
                            $lookup: {
                                from: 'meals',
                                as: 'meals',
                                pipeline: [
                                    {
                                        $match: {
                                            $and: [{ start_time: { $lt: new Date() } }, { end_time: { $gt: new Date() } }],
                                        },
                                    },
                                    {
                                        $lookup: {
                                            from: 'mealtokens',
                                            as: 'mealtokens',
                                            localField: '_id',
                                            foreignField: 'meal_id',
                                            pipeline: [{ $match: { $expr: { $eq: ['$$token_user_id', '$user_id'] } } }],
                                        },
                                    },
                                ],
                            },
                        },
                    ],
                },
            },
        ]);
        if (accessTokens.length === 0)
            return 0;
        if (accessTokens[0].users.length === 0)
            return 0;
        const user = accessTokens[0].users[0];
        if (user.kerberos !== kerberos)
            return -1;
        return {
            token: {
                user_id: {
                    name: user.name,
                    kerberos: user.kerberos,
                    hostel: user.hostel,
                    isActive: user.isActive,
                },
            },
            active_meals: user.meals.flatMap((meal) => meal.mealtokens.map((mealtoken) => ({
                _id: mealtoken._id,
                status: mealtoken.status,
                enter_time: mealtoken.enter_time,
                meal_id: {
                    name: meal.name,
                    start_time: meal.start_time,
                    end_time: meal.end_time,
                },
            }))),
        };
    }
    async verifyWithoutToken(kerberos) {
        const u = await this.userModel.findOne({ kerberos: kerberos });
        if (!u) {
            return null;
        }
        const t = await this.accessTokenModel.find({ user_id: u });
        const active = await this.mealModel.find({
            end_time: { $gt: new Date() },
            start_time: { $lt: new Date() },
        });
        const doc = await this.mealTokenModel.find({
            user_id: u,
            meal_id: active,
        });
        return { user: u, tokens: t, active_meals: doc };
    }
    async getMealTokens(kerberos) {
        const u = await this.userModel.findOne({ kerberos: kerberos });
        return this.mealTokenModel.find({ user_id: u }).populate('meal_id');
    }
    async useMealToken(id) {
        const a = new Date();
        const doc = await this.mealTokenModel.findById(id);
        const b = new Date();
        console.log('mealTokenModel.findById(id)', b.valueOf() - a.valueOf());
        if (!doc) {
            return 0;
        }
        if (doc.status === 'USED') {
            return -1;
        }
        doc.status = 'USED';
        doc.enter_time = new Date();
        return doc.save();
    }
};
StaffService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(user_schema_1.User.name)),
    __param(1, (0, mongoose_1.InjectModel)(accesstoken_schema_1.AccessToken.name)),
    __param(2, (0, mongoose_1.InjectModel)(mealtoken_schema_1.MealToken.name)),
    __param(3, (0, mongoose_1.InjectModel)(meal_schema_1.Meal.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model])
], StaffService);
exports.StaffService = StaffService;
//# sourceMappingURL=staff.service.js.map