"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const serverless_express_1 = __importDefault(require("@vendia/serverless-express"));
let server;
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.init();
    const expressApp = app.getHttpAdapter().getInstance();
    return (0, serverless_express_1.default)({ app: expressApp });
}
const handler = async (event, context, callback) => {
    server = server ?? (await bootstrap());
    return server(event, context, callback);
};
exports.handler = handler;
//# sourceMappingURL=serverless.js.map