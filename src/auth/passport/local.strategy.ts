import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
	constructor(private authService: AuthService) {
		super({ usernameField: 'kerberos' });
	}

	async validate(kerberos: string, password: string): Promise<any> {
		const user = await this.authService.validateAdmin(kerberos, password);
		if (!user) {
			throw new UnauthorizedException();
		}
		return user;
	}
}
