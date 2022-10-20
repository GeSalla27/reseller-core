import { Exclude, Expose } from "@nestjs/class-transformer";
import { IsString } from "@nestjs/class-validator";

@Exclude()
export class ResellerListQuerySchema {
  @Expose()
  @IsString()
  email: string;
}
