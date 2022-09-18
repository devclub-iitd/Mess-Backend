"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const session = require("express-session");
const app_module_1 = require("./app.module");
const config_1 = require("./config");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.use(session({
        secret: config_1.default.SESSION_SECRET,
        resave: false,
        saveUninitialized: false,
    }));
    await app.listen(config_1.default.PORT);
}
bootstrap();
//# sourceMappingURL=main.js.map