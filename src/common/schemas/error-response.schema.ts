import { ApiProperty } from "@nestjs/swagger";
import { Exclude, Expose } from "class-transformer";

@Exclude()
export class ErrorResponseSchema {
  @Expose()
  @ApiProperty()
  readonly messageError: string;

  /**
   * @param partial
   */
  constructor(partial?: Partial<ErrorResponseSchema>) {
    Object.assign(this, partial);
  }
}
