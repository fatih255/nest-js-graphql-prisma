"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors();
    app.useGlobalPipes(new common_1.ValidationPipe());
    await app.listen(3001);
    console.log(`Application is running on: http://localhost:3001/graphql`);
    console.log(`GraphQL Playground: http://localhost:3001/graphql`);
}
bootstrap();
//# sourceMappingURL=main.js.map