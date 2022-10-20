import { HttpModule } from "@nestjs/axios";
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ResellerEntity } from "./entities/reseller.entity";
import { LoggingModule } from "../logging/logging.module";

import { ResellerController } from "./reseller.controller";
import { ResellerRepository } from "./reseller.repository";
import { ResellerService } from "./reseller.service";

@Module({
  controllers: [ResellerController],
  imports: [
    HttpModule,
    LoggingModule,
    TypeOrmModule.forFeature([ResellerEntity]),
  ],
  providers: [ResellerService, ResellerRepository],
})
export class ResellerModule {}
