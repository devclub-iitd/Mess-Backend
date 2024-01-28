import { NestFactory } from '@nestjs/core';
import * as session from 'express-session';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import CONFIG from './utils/config';
import { join } from 'path';
import * as hbs from 'hbs';
import { createClient } from 'redis';
import RedisStore from 'connect-redis';

const redisClient = createClient({
	url: `redis://:${CONFIG.REDIS_PASSWORD}@${CONFIG.REDIS_HOST}:${CONFIG.REDIS_PORT}`,
});
redisClient.connect().catch(console.error);
const redisStore = new RedisStore({ client: redisClient });

async function bootstrap() {
	const app = await NestFactory.create<NestExpressApplication>(AppModule);

	app.use(
		session({
			store: redisStore,
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
