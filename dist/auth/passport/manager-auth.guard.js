"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ManagerAuthGuard = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
let ManagerAuthGuard = class ManagerAuthGuard extends (0, passport_1.AuthGuard)() {
    canActivate(context) {
        const request = context.switchToHttp().getRequest();
        if (!request.session.user.isManager) {
            throw new common_1.UnauthorizedException('Only managers can access this route');
        }
        return true;
    }
};
ManagerAuthGuard = __decorate([
    (0, common_1.Injectable)()
], ManagerAuthGuard);
exports.ManagerAuthGuard = ManagerAuthGuard;
//# sourceMappingURL=manager-auth.guard.js.map