import {
  HttpStatus,
  UnprocessableEntityException,
  ValidationPipeOptions,
} from "@nestjs/common";

const validationPipeConfigs = (
  overrideOptions: ValidationPipeOptions
): ValidationPipeOptions => {
  return {
    errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY,
    exceptionFactory: (errors) => new UnprocessableEntityException(errors),
    forbidNonWhitelisted: true,
    transform: true,
    validationError: {
      target: false,
    },
    whitelist: true,
    ...overrideOptions,
  };
};

export default validationPipeConfigs;
