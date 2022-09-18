require('dotenv').config();

const CONFIG = {
  PORT: process.env.PORT,
  MONGODB_STRING: process.env.MONGODB_STRING,
};

export default CONFIG;
