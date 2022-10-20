import { NestFactory } from "@nestjs/core";
import { NestExpressApplication } from "@nestjs/platform-express";

import { INestApplication } from "@nestjs/common";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { WinstonModule, WINSTON_MODULE_NEST_PROVIDER } from "nest-winston";
import winston from "winston";
import env from "./app.env";
import { AppModule } from "./app.module";
import winstonTransports from "./config/winston/winston.config";
import {
  PROJECT_DESCRIPTION,
  PROJECT_NAME,
  PROJECT_VERSION,
} from "./constants";

const frameguard = require("frameguard");

/**
 * Default url endpoint for Swagger UI.
 */
const DEFAULT_SWAGGER_PREFIX = "/docs";

export const setupSwagger = (app: INestApplication) => {
  const options = new DocumentBuilder()
    .setTitle(PROJECT_NAME!)
    .setDescription(PROJECT_DESCRIPTION!)
    .setVersion(PROJECT_VERSION!)
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, options);
  const path = process.env.SWAGGER_PREFIX || DEFAULT_SWAGGER_PREFIX;

  SwaggerModule.setup(path, app, document);
};

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    cors: true,
    logger: WinstonModule.createLogger(winstonTransports),
  });
  const logger = app.get<winston.Logger>(WINSTON_MODULE_NEST_PROVIDER);

  app.disable("x-powered-by");
  app.setGlobalPrefix(env.BASE_PATH ?? "");
  app.use(frameguard({ action: "DENY" }));
  app.useLogger(logger);

  setupSwagger(app);

  await app.listen(env.SERVER_PORT, env.SERVER_HOST);

  logger.warn(`Nest application started on port ${env.SERVER_PORT}`);
}

bootstrap();
