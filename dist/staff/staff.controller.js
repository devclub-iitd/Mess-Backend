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
exports.StaffController = void 0;
const common_1 = require("@nestjs/common");
const admin_auth_guard_1 = require("../auth/passport/admin-auth.guard");
const staff_service_1 = require("./staff.service");
let StaffController = class StaffController {
    constructor(staffService) {
        this.staffService = staffService;
    }
    async verifyToken(query) {
        const { kerberos, token } = query;
        const x = await this.staffService.verifyToken(kerberos, token);
        if (x === 0) {
            throw new common_1.NotFoundException();
        }
        else if (x === -1) {
            throw new common_1.BadRequestException();
        }
        return x;
    }
    async verifyWithoutToken(query) {
        const { kerberos } = query;
        const x = await this.staffService.verifyWithoutToken(kerberos);
        if (!x) {
            throw new common_1.NotFoundException();
        }
        return x;
    }
    async getMealTokens(query) {
        const { kerberos } = query;
        return this.staffService.getMealTokens(kerberos);
    }
    async useMealToken(body) {
        const { token_id } = body;
        const x = await this.staffService.useMealToken(token_id);
        if (x === 0) {
            throw new common_1.NotFoundException('No such meal token');
        }
        else if (x === -1) {
            throw new common_1.ForbiddenException('Meal token already used');
        }
        else {
            return x;
        }
    }
};
__decorate([
    (0, common_1.Get)('verifyToken'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], StaffController.prototype, "verifyToken", null);
__decorate([
    (0, common_1.Get)('verifyWithoutToken'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], StaffController.prototype, "verifyWithoutToken", null);
__decorate([
    (0, common_1.Get)('getMealTokens'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], StaffController.prototype, "getMealTokens", null);
__decorate([
    (0, common_1.Post)('useMealToken'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], StaffController.prototype, "useMealToken", null);
StaffController = __decorate([
    (0, common_1.UseGuards)(admin_auth_guard_1.AdminAuthGuard),
    (0, common_1.Controller)('staff'),
    __metadata("design:paramtypes", [staff_service_1.StaffService])
], StaffController);
exports.StaffController = StaffController;
//# sourceMappingURL=staff.controller.js.map