import {
	BadRequestException,
	Body,
	Controller,
	ForbiddenException,
	Get,
	NotFoundException,
	Post,
	Query,
	Req,
	UseGuards,
} from '@nestjs/common';
import { AdminAuthGuard } from 'src/auth/passport/admin-auth.guard';
import { StaffService } from './staff.service';

@UseGuards(AdminAuthGuard)
@Controller('staff')
export class StaffController {
	constructor(private readonly staffService: StaffService) {}

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
}
