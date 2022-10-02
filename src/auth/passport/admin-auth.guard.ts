import { ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';

@Injectable()
export class AdminAuthGuard extends AuthGuard() {
	canActivate(context: ExecutionContext) {
		const request: Request = context.switchToHttp().getRequest();

		if (!request.session.user) {
			throw new UnauthorizedException('Please login');
		}

		return true;
	}
}
