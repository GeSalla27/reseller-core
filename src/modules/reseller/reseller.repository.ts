import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { ResellerEntity } from "./entities/reseller.entity";
import { ResellerInputSchema } from "./schemas/reseller-input.schema";

@Injectable()
export class ResellerRepository {
  constructor(
    @InjectRepository(ResellerEntity)
    private readonly resellerRepository: Repository<ResellerEntity>
  ) {}

  async create(resellerData: ResellerInputSchema): Promise<ResellerEntity> {
    return this.resellerRepository.create(resellerData);
  }

  async findAll(): Promise<ResellerEntity[]> {
    return this.resellerRepository.find();
  }

  async findOne(id: string): Promise<ResellerEntity | null> {
    return this.resellerRepository.findOneBy({ id });
  }
}
