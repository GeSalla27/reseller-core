import { Exclude, Expose } from "@nestjs/class-transformer";
import { IsNotEmpty, IsUUID } from "@nestjs/class-validator";
import { ApiProperty } from "@nestjs/swagger";

@Exclude()
export class IdParamSchema {
  @Expose()
  @IsUUID(4)
  @IsNotEmpty()
  @ApiProperty()
  id: string;
}
