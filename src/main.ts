import { NestFactory } from '@nestjs/core';
import * as session from 'express-session';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import CONFIG from './config';
import { join } from 'path';
import * as hbs from 'hbs';

async function bootstrap() {
	const app = await NestFactory.create<NestExpressApplication>(AppModule);

	app.use(
		session({
			secret: CONFIG.SESSION_SECRET,
			resave: false,
			saveUninitialized: false,
			// cookie: { sameSite: 'none', secure: true },
		}),
	);

	app.setBaseViewsDir(join(__dirname, '..', 'views'));
	app.setViewEngine('hbs');
	hbs.registerPartials(join(__dirname, '..', 'views', 'partials'));

	await app.listen(CONFIG.PORT);
}
bootstrap();
