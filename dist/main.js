"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const session = require("express-session");
const app_module_1 = require("./app.module");
const config_1 = require("./config");
const path_1 = require("path");
const hbs = require("hbs");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.use(session({
        secret: config_1.default.SESSION_SECRET,
        resave: false,
        saveUninitialized: false,
    }));
    app.setBaseViewsDir((0, path_1.join)(__dirname, '..', 'views'));
    app.setViewEngine('hbs');
    hbs.registerPartials((0, path_1.join)(__dirname, '..', 'views', 'partials'));
    await app.listen(config_1.default.PORT);
}
bootstrap();
//# sourceMappingURL=main.js.map