require('dotenv').config();

const CONFIG = {
	PORT: process.env.PORT,
	MONGODB_STRING: process.env.MONGODB_STRING,
	SESSION_SECRET: process.env.SESSION_SECRET,
	REDIS_HOST: process.env.REDIS_HOST,
	REDIS_PORT: process.env.REDIS_PORT,
	REDIS_PASSWORD: process.env.REDIS_PASSWORD,
	MULTER_MEDIA_DESTINATION: process.env.MULTER_MEDIA_DESTINATION,
};

export default CONFIG;
