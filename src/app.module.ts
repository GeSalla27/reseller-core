import { Module, ValidationPipe } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { APP_PIPE } from "@nestjs/core";
import { TypeOrmModule } from "@nestjs/typeorm";
import { WinstonModule } from "nest-winston";
import env from "./app.env";
import winstonConfig from "./config/winston/winston.config";
import { ResellerModule } from "./modules/reseller/reseller.module";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      database: env.DB_DATABASE,
      entities: [`${__dirname}/**/*.entity{.js,.ts}`],
      host: env.DB_HOST,
      password: env.DB_PASSWORD,
      port: env.DB_PORT,
      synchronize: true,
      type: "postgres",
      username: env.DB_USERNAME,
    }),

    ConfigModule.forRoot(),
    ResellerModule,
    WinstonModule.forRoot(winstonConfig),
  ],
  providers: [{ provide: APP_PIPE, useValue: new ValidationPipe({}) }],
})
export class AppModule {}
