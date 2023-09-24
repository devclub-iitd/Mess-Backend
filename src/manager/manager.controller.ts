import {
	BadRequestException,
	Body,
	Controller,
	Get,
	NotFoundException,
	Post,
	Query,
	Req,
	UnauthorizedException,
	UploadedFile,
	UseGuards,
	UseInterceptors,
} from '@nestjs/common';
import { AdminAuthGuard } from 'src/auth/passport/admin-auth.guard';
import { ManagerAuthGuard } from 'src/auth/passport/manager-auth.guard';
import { ManagerService } from './manager.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { parseRebate } from 'src/utils/parseExcel';

@UseGuards(ManagerAuthGuard)
@UseGuards(AdminAuthGuard)
@Controller('manager')
export class ManagerController {
	constructor(private readonly managerService: ManagerService) {}

	@Post('createUser')
	async createUser(@Body() body) {
		const { kerberos, name, hostel } = body;
		const x = await this.managerService.createUser(kerberos, name, hostel);
		if (!x) {
			throw new BadRequestException(`User with kerberos ${kerberos} already created`);
		}
		return x;
	}

	@Get('getUsers')
	async getUsers() {
		return this.managerService.getUsers();
	}

	@Post('createAccessToken')
	async createAccessToken(@Body() body) {
		const { kerberos, scope } = body;
		const x = await this.managerService.createAccessToken(kerberos, scope);
		if (!x) {
			throw new BadRequestException('User does not exist');
		}
		return x;
	}

	@Get('getAccessTokens')
	async getAccessTokens(@Query() query) {
		const { kerberos } = query;
		const x = await this.managerService.getAccessTokens(kerberos);
		if (!x) {
			throw new BadRequestException('User does not exist');
		}
		return x;
	}

	@Post('createMeal')
	async createMeal(@Body() body) {
		const mess: string = body.mess;
		const name: string = body.name;
		const start_time = new Date(body.start_time);
		const end_time = new Date(body.end_time);
		const capacity: number = body.capacity;
		const price: number = body.price;
		const fooditem_ids: string[] = body.fooditem_ids;
		const x = await this.managerService.createMeal(mess, name, start_time, end_time, capacity, price, fooditem_ids);
		if (!x) {
			throw new BadRequestException();
		}
		return x;
	}

	@Get('getMeals')
	async getMeals(@Query() query) {
		const { limit, date } = query;
		return this.managerService.getMeals(Number(limit), date);
	}

	@Post('createMealToken')
	async createMealToken(@Body() body) {
		const { kerberos, meal_id, status } = body;
		const x = await this.managerService.createMealToken(kerberos, meal_id, status);
		if (!x) {
			throw new BadRequestException();
		}
		return x;
	}

	@Post('bulkCreateMealToken')
	async bulkCreateMealToken(@Body() body) {
		const { meal_id, status } = body;
		const x = await this.managerService.bulkCreateMealToken(meal_id, status);
		if (!x) {
			throw new NotFoundException();
		}
		return x;
	}

	@Get('getMealTokens')
	async getMealTokens(@Query() query) {
		const { kerberos, meal_id } = query;
		return this.managerService.getMealTokens(kerberos, meal_id);
	}

	@Post('createRebate')
	async createRebate(@Body() body, @Req() req: Express.Request) {
		const { kerberos, rebate_application_no, from_date, to_date, approval_status, days, reason, type, amount } = body;
		const admin_id = req.session.user.id;
		const result = await this.managerService.createRebate(
			kerberos,
			admin_id,
			rebate_application_no,
			new Date(from_date),
			new Date(to_date),
			approval_status,
			days,
			reason,
			type,
			amount,
		);
		if (result === 0) throw new NotFoundException();
		if (result === -1) throw new UnauthorizedException();
		return result;
	}

	@Post('bulkCreateRebates')
	@UseInterceptors(FileInterceptor('file'))
	async uploadFile(@UploadedFile() file: Express.Multer.File, @Req() req: Express.Request) {
		const admin_id = req.session.user.id;
		const result = await this.managerService.bulkCreateRebates(admin_id, file.path);
		if (result.find((r) => r === 0) === 0) throw new NotFoundException();
		if (result.find((r) => r === -1)) throw new UnauthorizedException();
		return result;
	}

	@Get('getRebates')
	async getRebates() {
		return this.managerService.getRebates();
	}
}
