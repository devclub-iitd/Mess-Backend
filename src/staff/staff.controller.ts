import {
	BadRequestException,
	Body,
	Controller,
	ForbiddenException,
	Get,
	NotFoundException,
	Post,
	Query,
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
		const { kerberos, token } = query;
		const x = await this.staffService.verifyToken(kerberos, token);
		if (x === 0) {
			throw new NotFoundException();
		} else if (x === -1) {
			throw new BadRequestException();
		}
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
	async useMealToken(@Body() body) {
		const { token_id } = body;
		const x = await this.staffService.useMealToken(token_id);
		if (x === 0) {
			throw new NotFoundException('No such meal token');
		} else if (x === -1) {
			throw new ForbiddenException('Meal token already used');
		} else {
			return x;
		}
	}
}
