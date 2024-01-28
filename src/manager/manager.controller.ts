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
	UnauthorizedException,
	UploadedFile,
	UseGuards,
	UseInterceptors,
} from '@nestjs/common';
import { AdminAuthGuard } from 'src/auth/passport/admin-auth.guard';
import { ManagerAuthGuard } from 'src/auth/passport/manager-auth.guard';
import { ManagerService } from './manager.service';
import { FileInterceptor } from '@nestjs/platform-express';

@UseGuards(ManagerAuthGuard)
@UseGuards(AdminAuthGuard)
@Controller('manager')
export class ManagerController {
	constructor(private readonly managerService: ManagerService) {}

	@Post('createUser')
	async createUser(@Body() body, @Req() req: Express.Request) {
		const { kerberos, name, hostel, messName } = body;

		const x = await this.managerService.createUser(kerberos, name, hostel, messName, req.session.user.messNames);

		if (x === -1) throw new BadRequestException(`User with kerberos ${kerberos} already created`);

		if (x === -2)
			throw new ForbiddenException(
				`Cannot create user in mess ${messName}. Permissions only for ${req.session.user.messNames}`,
			);

		return x;
	}

	@Get('getUsers')
	async getUsers(@Query() query) {
		const { messName } = query;
		const x = await this.managerService.getUsers(messName);
		if (x === -1) throw new BadRequestException('Invalid messName ' + messName);

		return x;
	}

	@Post('createAccessToken')
	async createAccessToken(@Body() body, @Req() req: Express.Request) {
		const { kerberos, scope } = body;
		const x = await this.managerService.createAccessToken(kerberos, scope, req.session.user.messNames);

		if (x === -1) throw new BadRequestException('User does not exist');
		if (x === -2) throw new ForbiddenException(`Manager permissions only for ${req.session.user.messNames}`);

		return x;
	}

	@Get('getAccessTokens')
	async getAccessTokens(@Query() query, @Req() req: Express.Request) {
		const { kerberos } = query;
		const x = await this.managerService.getAccessTokens(kerberos, req.session.user.messNames);

		if (x === -1) throw new BadRequestException('User does not exist');
		if (x === -2) throw new ForbiddenException("You don't have permissions to view this user");

		return x;
	}

	@Post('createMeal')
	async createMeal(@Body() body, @Req() req: Express.Request) {
		const messName: string = body.mess;
		if (!req.session.user.messNames.find((d) => d === messName))
			throw new ForbiddenException(`Manager permissions only for ${req.session.user.messNames}`);

		const name: string = body.name;
		const start_time = new Date(body.start_time);
		const end_time = new Date(body.end_time);
		const capacity: number = body.capacity;
		const price: number = body.price;
		const fooditem_ids: string[] = body.fooditem_ids;
		const x = await this.managerService.createMeal(messName, name, start_time, end_time, capacity, price, fooditem_ids);

		if (x === -1) throw new BadRequestException(`Start date should be less than end date`);
		if (x === -2) throw new NotFoundException(`No such mess ${messName}`);

		return x;
	}

	@Get('getMeals')
	async getMeals(@Query() query) {
		const { limit, date, messName } = query;
		const x = await this.managerService.getMeals(Number(limit), date, messName);
		if (x === -1) throw new NotFoundException(`No such mess ${messName}`);
	}

	@Post('createMealToken')
	async createMealToken(@Body() body, @Req() req: Express.Request) {
		const { kerberos, meal_id, status } = body;
		const x = await this.managerService.createMealToken(kerberos, meal_id, status, req.session.user.messNames);

		if (x === -1) throw new NotFoundException('No such user');
		if (x === -2) throw new NotFoundException('No such meal');
		if (x === -3) throw new ForbiddenException('Mess not allowed');

		return x;
	}

	@Post('bulkCreateMealToken')
	async bulkCreateMealToken(@Body() body, @Req() req: Express.Request) {
		const { meal_id, status } = body;
		const x = await this.managerService.bulkCreateMealToken(meal_id, status, req.session.user.messNames);

		if (x === -1) throw new NotFoundException('No such meal');
		if (x === -2) throw new ForbiddenException();

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
	async getRebates(@Query() query, @Req() req: Express.Request) {
		const { messName } = query;
		if (!req.session.user.messNames.find((d) => d === messName))
			throw new ForbiddenException(`Manager permissions only for ${req.session.user.messNames}`);

		const x = await this.managerService.getRebates(messName);
		if (x === -1) throw new NotFoundException('No such mess');
		return x;
	}
}
