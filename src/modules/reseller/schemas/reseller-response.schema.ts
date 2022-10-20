import { Exclude, Expose } from "@nestjs/class-transformer";
import { ApiProperty } from "@nestjs/swagger";

@Exclude()
export class ResellerResponseSchema {
  @ApiProperty()
  @Expose()
  id: string;

  @ApiProperty()
  @Expose()
  name: string;

  @ApiProperty()
  @Expose()
  email: string;
}
