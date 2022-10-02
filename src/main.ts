import { NestFactory } from '@nestjs/core';
import * as session from 'express-session';
import { AppModule } from './app.module';
import CONFIG from './config';

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	app.use(
		session({
			secret: CONFIG.SESSION_SECRET,
			resave: false,
			saveUninitialized: false,
			// cookie: { sameSite: 'none', secure: true },
		}),
	);
	await app.listen(CONFIG.PORT);
}
bootstrap();
