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
exports.WebController = void 0;
const common_1 = require("@nestjs/common");
let WebController = class WebController {
    root(req) {
        return { message: 'Welcome to Mess Management System', user: req.session.user };
    }
    login(req, res) {
        if (req.session.user) {
            res.redirect('/');
        }
    }
    logout(req, res) {
        return { user: req.session.user };
    }
    users(req, res) {
        return { user: req.session.user };
    }
    meals(req, res) {
        return { user: req.session.user };
    }
    mealtokens(req, res) {
        return { user: req.session.user };
    }
};
__decorate([
    (0, common_1.Get)(),
    (0, common_1.Render)('index'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], WebController.prototype, "root", null);
__decorate([
    (0, common_1.Get)('login'),
    (0, common_1.Render)('login'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], WebController.prototype, "login", null);
__decorate([
    (0, common_1.Get)('logout'),
    (0, common_1.Render)('logout'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], WebController.prototype, "logout", null);
__decorate([
    (0, common_1.Get)('users'),
    (0, common_1.Render)('users'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], WebController.prototype, "users", null);
__decorate([
    (0, common_1.Get)('meals'),
    (0, common_1.Render)('meals'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], WebController.prototype, "meals", null);
__decorate([
    (0, common_1.Get)('mealtokens'),
    (0, common_1.Render)('mealtokens'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], WebController.prototype, "mealtokens", null);
WebController = __decorate([
    (0, common_1.Controller)('web')
], WebController);
exports.WebController = WebController;
//# sourceMappingURL=web.controller.js.map