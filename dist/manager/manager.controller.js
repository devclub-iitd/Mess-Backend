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
exports.ManagerController = void 0;
const common_1 = require("@nestjs/common");
const admin_auth_guard_1 = require("../auth/passport/admin-auth.guard");
const manager_auth_guard_1 = require("../auth/passport/manager-auth.guard");
const manager_service_1 = require("./manager.service");
let ManagerController = class ManagerController {
    constructor(managerService) {
        this.managerService = managerService;
    }
    async createUser(body) {
        const { kerberos, name, hostel } = body;
        const x = await this.managerService.createUser(kerberos, name, hostel);
        if (!x) {
            throw new common_1.BadRequestException(`User with kerberos ${kerberos} already created`);
        }
        return x;
    }
    async getUsers() {
        return this.managerService.getUsers();
    }
    async createAccessToken(body) {
        const { kerberos, scope } = body;
        const x = await this.managerService.createAccessToken(kerberos, scope);
        if (!x) {
            throw new common_1.BadRequestException('User does not exist');
        }
        return x;
    }
    async getAccessTokens(query) {
        const { kerberos } = query;
        const x = await this.managerService.getAccessTokens(kerberos);
        if (!x) {
            throw new common_1.BadRequestException('User does not exist');
        }
        return x;
    }
    async createMeal(body) {
        const mess = body.mess;
        const name = body.name;
        const start_time = new Date(body.start_time);
        const end_time = new Date(body.end_time);
        const capacity = body.capacity;
        const price = body.price;
        const fooditem_ids = body.fooditem_ids;
        const x = await this.managerService.createMeal(mess, name, start_time, end_time, capacity, price, fooditem_ids);
        if (!x) {
            throw new common_1.BadRequestException();
        }
        return x;
    }
    async getMeals(query) {
        const { limit, date } = query;
        return this.managerService.getMeals(limit, date);
    }
    async createMealToken(body) {
        const { kerberos, meal_id, status } = body;
        const x = await this.managerService.createMealToken(kerberos, meal_id, status);
        if (!x) {
            throw new common_1.BadRequestException();
        }
        return x;
    }
    async getMealTokens(query) {
        const { kerberos, meal_id } = query;
        return this.managerService.getMealTokens(kerberos, meal_id);
    }
};
__decorate([
    (0, common_1.Post)('createUser'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ManagerController.prototype, "createUser", null);
__decorate([
    (0, common_1.Get)('getUsers'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ManagerController.prototype, "getUsers", null);
__decorate([
    (0, common_1.Post)('createAccessToken'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ManagerController.prototype, "createAccessToken", null);
__decorate([
    (0, common_1.Get)('getAccessTokens'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ManagerController.prototype, "getAccessTokens", null);
__decorate([
    (0, common_1.Post)('createMeal'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ManagerController.prototype, "createMeal", null);
__decorate([
    (0, common_1.Get)('getMeals'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ManagerController.prototype, "getMeals", null);
__decorate([
    (0, common_1.Post)('createMealToken'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ManagerController.prototype, "createMealToken", null);
__decorate([
    (0, common_1.Get)('getMealTokens'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ManagerController.prototype, "getMealTokens", null);
ManagerController = __decorate([
    (0, common_1.UseGuards)(manager_auth_guard_1.ManagerAuthGuard),
    (0, common_1.UseGuards)(admin_auth_guard_1.AdminAuthGuard),
    (0, common_1.Controller)('manager'),
    __metadata("design:paramtypes", [manager_service_1.ManagerService])
], ManagerController);
exports.ManagerController = ManagerController;
//# sourceMappingURL=manager.controller.js.map