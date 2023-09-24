"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const CONFIG = {
    PORT: process.env.PORT,
    MONGODB_STRING: process.env.MONGODB_STRING,
    SESSION_SECRET: process.env.SESSION_SECRET,
};
exports.default = CONFIG;
//# sourceMappingURL=config.js.map