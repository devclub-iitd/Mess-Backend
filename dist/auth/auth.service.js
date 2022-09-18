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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const admin_schema_1 = require("../schemas/admin.schema");
const bcrypt = require("bcrypt");
let AuthService = class AuthService {
    constructor(adminModel) {
        this.adminModel = adminModel;
    }
    async createAdmin(kerberos, password, name, role) {
        const doc = await this.adminModel.findOne({ kerberos: kerberos });
        if (doc) {
            return null;
        }
        const hash = await bcrypt.hash(password, 10);
        const createdAdmin = new this.adminModel({
            kerberos: kerberos,
            password_hash: hash,
            name: name,
            role: role,
            isManager: false,
        });
        await createdAdmin.save();
        return createdAdmin.id;
    }
    async validateAdmin(kerberos, password) {
        const admin = await this.adminModel.findOne({ kerberos: kerberos });
        if (admin && bcrypt.compare(password, admin.password_hash)) {
            return {
                id: admin.id,
                kerberos: admin.kerberos,
                isManager: admin.isManager,
                name: admin.name,
                role: admin.role,
            };
        }
        return null;
    }
    async myProfile(user_id) {
        return this.adminModel.findById(user_id);
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(admin_schema_1.Admin.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map