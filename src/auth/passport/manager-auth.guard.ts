import {
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';

@Injectable()
export class ManagerAuthGuard extends AuthGuard() {
  canActivate(context: ExecutionContext) {
    const request: Request = context.switchToHttp().getRequest();

    if (!request.session.user.isManager) {
      throw new UnauthorizedException('Only managers can access this route');
    }

    return true;
  }
}
