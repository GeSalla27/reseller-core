import { Injectable, NotFoundException } from "@nestjs/common";
import { LoggingService } from "../logging/logging.service";
import { ResellerRepository } from "./reseller.repository";
import { ResellerResponseSchema } from "./schemas/reseller-response.schema";

@Injectable()
export class ResellerService {
  constructor(
    private readonly resellersRepository: ResellerRepository,
    private readonly loggingService: LoggingService
  ) {}

  async getReseller(id: string): Promise<ResellerResponseSchema> {
    this.loggingService.info("Getting reseller attempt");

    const reseller = await this.resellersRepository.findOne(id);

    if (!reseller) {
      throw new NotFoundException();
    }
    return reseller;
  }
}
