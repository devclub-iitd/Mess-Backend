import { Controller, Get, Redirect, Render, Req } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
	constructor(private readonly appService: AppService) {}

	@Get()
	@Redirect('web', 301)
	index() {}
}
