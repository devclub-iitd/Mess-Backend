import { Controller, Get, Render, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';

@Controller('web')
export class WebController {
	@Get()
	@Render('index')
	root(@Req() req) {
		return { message: 'Welcome to Mess Management System', user: req.session.user };
	}

	@Get('login')
	@Render('login')
	login(@Req() req: Request, @Res() res: Response) {
		if (req.session.user) {
			res.redirect('/');
		}
	}

	@Get('logout')
	@Render('logout')
	logout(@Req() req: Request, @Res() res: Response) {
		return { user: req.session.user };
	}

	@Get('users')
	@Render('users')
	users(@Req() req: Request, @Res() res: Response) {
		return { user: req.session.user };
	}

	@Get('meals')
	@Render('meals')
	meals(@Req() req: Request, @Res() res: Response) {
		return { user: req.session.user };
	}

	@Get('mealtokens')
	@Render('mealtokens')
	mealtokens(@Req() req: Request, @Res() res: Response) {
		return { user: req.session.user };
	}
}
