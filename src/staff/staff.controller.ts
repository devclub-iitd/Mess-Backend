import {
	BadRequestException,
	Body,
	Controller,
	ForbiddenException,
	Get,
	NotFoundException,
	Param,
	Post,
	Query,
	Req,
	StreamableFile,
	UploadedFile,
	UseGuards,
	UseInterceptors,
} from '@nestjs/common';
import { AdminAuthGuard } from 'src/auth/passport/admin-auth.guard';
import { StaffService } from './staff.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import CONFIG from 'src/utils/config';

import { join } from 'path';
import { createReadStream, existsSync } from 'fs';
import sharp from 'sharp';
import { generatePath } from 'src/utils/utils';

@UseGuards(AdminAuthGuard)
@Controller('staff')
export class StaffController {
	constructor(private readonly staffService: StaffService) { }

	@Get('verifyToken')
	async verifyToken(@Query() query) {
		const a = new Date();
		const { kerberos, token } = query;
		const x = await this.staffService.verifyToken(kerberos, token);
		if (x === 0) {
			throw new NotFoundException();
		} else if (x === -1) {
			throw new BadRequestException();
		}
		const b = new Date();
		console.log('verifyToken', b.valueOf() - a.valueOf());
		return x;
	}

	@Get('verifyWithoutToken')
	async verifyWithoutToken(@Query() query) {
		const { kerberos } = query;
		const x = await this.staffService.verifyWithoutToken(kerberos);
		if (!x) {
			throw new NotFoundException();
		}
		return x;
	}

	@Get('getMealTokens')
	async getMealTokens(@Query() query) {
		const { kerberos } = query;
		return this.staffService.getMealTokens(kerberos);
	}

	@Post('useMealToken')
	async useMealToken(@Body() body, @Req() req: Express.Request) {
		const a = new Date();
		const { token_id } = body;
		const x = await this.staffService.useMealToken(token_id, req.session.user.messNames);
		const b = new Date();
		console.log('useMealToken', b.valueOf() - a.valueOf());

		if (x === 0) throw new NotFoundException('No such meal token');
		if (x === -1) throw new ForbiddenException('Mess not allowed for this staff');
		if (x === -2) throw new ForbiddenException('Meal token already used');
		if (x === -3) throw new ForbiddenException('User is on REBATE');

		return x;
	}

	@Post('verifyQRCode')
	async verifyQRCode(@Body() body, @Req() req: Express.Request) {
		const { kerberos, token } = body;
		const x = await this.staffService.verifyQRCode(kerberos, token, req.session.user.messNames);

		if (x === 0) throw new NotFoundException('No such user');
		if (x === -1) throw new NotFoundException('No active meal for this user');
		if (x === -2) throw new ForbiddenException('Mess not allowed for this staff');
		if (x === -3) throw new NotFoundException('No meal token for the user');
		if (x === -4) throw new ForbiddenException('User is on REBATE');

		return x;
	}

	@Post('uploadPhoto')
	@UseInterceptors(
		FileInterceptor('file', {
			storage: diskStorage({ destination: CONFIG.MULTER_MEDIA_DESTINATION }),
		}),
	)
	async uploadPhoto(@Body() body, @Req() req: Express.Request, @UploadedFile() file: Express.Multer.File) {
		const { kerberos } = body;

		const filePath = generatePath(CONFIG.MULTER_MEDIA_DESTINATION, 'jpg');
		await sharp(file.path).resize(480).jpeg({ quality: 60 }).toFile(filePath);

		const x = await this.staffService.uploadPhoto(kerberos, filePath, req.session.user.messNames);

		if (x === -1) throw new NotFoundException('No such student');
		if (x === -2) throw new ForbiddenException('Staff does not have access to this mess');

		return x;
	}

	@Get('photo/:uri')
	async serveMedia(@Param() params) {
		const { uri } = params;
		const path = join(CONFIG.MULTER_MEDIA_DESTINATION, uri);
		if (!existsSync(path)) {
			throw new NotFoundException('File does not exist');
		}
		const file = createReadStream(path);
		return new StreamableFile(file);
	}
}
