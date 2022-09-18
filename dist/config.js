"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const CONFIG = {
    PORT: process.env.PORT,
    MONGODB_STRING: process.env.MONGODB_STRING,
};
exports.default = CONFIG;
//# sourceMappingURL=config.js.map