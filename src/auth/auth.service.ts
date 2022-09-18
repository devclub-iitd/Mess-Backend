import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Admin, AdminDocument } from 'src/schemas/admin.schema';

import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(Admin.name) private adminModel: Model<AdminDocument>,
  ) {}

  async createAdmin(
    kerberos: string,
    password: string,
    name: string,
    role: string,
  ) {
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

  async validateAdmin(kerberos: string, password: string): Promise<any> {
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

  async myProfile(user_id: string) {
    return this.adminModel.findById(user_id);
  }
}
