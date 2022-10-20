import { TransformPlainToClass } from "@nestjs/class-transformer";
import { Controller, Get, HttpCode, HttpStatus, Param } from "@nestjs/common";
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from "@nestjs/swagger";
import { ErrorResponseSchema } from "../../common/schemas/error-response.schema";
import { IdParamSchema } from "../../common/schemas/id-param.schema";

import { ResellerService } from "./reseller.service";
import { ResellerResponseSchema } from "./schemas/reseller-response.schema";

@ApiTags("resellers")
@Controller("resellers")
export class ResellerController {
  constructor(private userService: ResellerService) {}

  @Get("/:id/")
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: "Get reseller" })
  @ApiParam({
    description: "Reseller id",
    name: "id",
    required: true,
  })
  @ApiResponse({
    description: "Reseller",
    status: 200,
    type: ResellerResponseSchema,
  })
  @ApiResponse({
    description: "Reseller not found",
    status: 404,
    type: ErrorResponseSchema,
  })
  @TransformPlainToClass(ResellerResponseSchema)
  async getReseller(
    @Param() params: IdParamSchema
  ): Promise<ResellerResponseSchema> {
    return this.userService.getReseller(params.id);
  }
}
