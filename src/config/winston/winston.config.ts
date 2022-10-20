import { WinstonModuleOptions } from "nest-winston";
import * as winston from "winston";
import { transports } from "winston";
import {
  ConsoleTransportOptions,
  FileTransportOptions,
} from "winston/lib/winston/transports";
import env from "../../app.env";

const winstonConfig = (overrideOptions?: any): WinstonModuleOptions => {
  const options = {
    logConsoleLevel: "warn",
    logFileActive: false,
    ...overrideOptions,
  };

  const winstonTrasports: winston.transport[] = [];

  const consoleLoggerOptions: ConsoleTransportOptions = {
    format: winston.format.json(),
    level: options.logConsoleLevel,
  };

  winstonTrasports.push(new transports.Console(consoleLoggerOptions));

  if (options.logFileActive) {
    const fileLoggerOptions: FileTransportOptions = {
      filename: options.logFileName,
      format: winston.format.json(),
      level: options.logFileLevel,
    };

    winstonTrasports.push(new transports.File(fileLoggerOptions));
  }
  return {
    handleExceptions: true,
    transports: winstonTrasports,
  };
};

const winstonTransports = winstonConfig({
  logConsoleLevel: env.LOG_CONSOLE_LEVEL,
  logFileActive: env.LOG_FILE_ACTIVE,
  logFileLevel: env.LOG_FILE_LEVEL,
  logFileName: env.LOG_FILE_NAME,
});

export default winstonTransports;
