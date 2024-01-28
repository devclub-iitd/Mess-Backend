import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Admin, AdminDocument } from 'src/schemas/admin.schema';

import * as bcrypt from 'bcrypt';
import { Mess, MessDocument } from 'src/schemas/mess.schema';

@Injectable()
export class AuthService {
	constructor(
		@InjectModel(Admin.name) private adminModel: Model<AdminDocument>,
		@InjectModel(Mess.name) private messModel: Model<MessDocument>,
	) {}

	async createAdmin(kerberos: string, password: string, name: string, role: string, messNames: string[]) {
		const doc = await this.adminModel.findOne({ kerberos: kerberos });
		if (doc) {
			return null;
		}
		const mess_ids = await this.messModel.find({ name: { $in: messNames } }).select('_id');
		const hash = await bcrypt.hash(password, 10);
		const createdAdmin = new this.adminModel({
			kerberos,
			password_hash: hash,
			name,
			role,
			isManager: false,
			mess_ids,
		});
		await createdAdmin.save();
		return createdAdmin.id;
	}

	async validateAdmin(kerberos: string, password: string): Promise<any> {
		const admin = await this.adminModel.findOne({ kerberos: kerberos }).populate('messes');
		if (admin && (await bcrypt.compare(password, admin.password_hash))) {
			return {
				id: admin.id,
				kerberos: admin.kerberos,
				isManager: admin.isManager,
				name: admin.name,
				role: admin.role,
				messNames: admin.mess_ids.map((d) => d.name),
			};
		}
		return null;
	}

	async myProfile(user_id: string) {
		return this.adminModel.findById(user_id);
	}
}
