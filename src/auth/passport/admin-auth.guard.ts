import { ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';

@Injectable()
export class AdminAuthGuard extends AuthGuard() {
	canActivate(context: ExecutionContext) {
		const a = new Date();
		const request: Request = context.switchToHttp().getRequest();

		if (!request.session.user) {
			throw new UnauthorizedException('Please login');
		}
		const b = new Date();
		console.log('AdminAuthGuard', b.valueOf() - a.valueOf());
		return true;
	}
}
