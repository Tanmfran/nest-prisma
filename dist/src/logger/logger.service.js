"use strict";
var __createBinding =
  (this && this.__createBinding) ||
  (Object.create
    ? function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (
          !desc ||
          ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)
        ) {
          desc = {
            enumerable: true,
            get: function () {
              return m[k];
            },
          };
        }
        Object.defineProperty(o, k2, desc);
      }
    : function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
      });
var __setModuleDefault =
  (this && this.__setModuleDefault) ||
  (Object.create
    ? function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      }
    : function (o, v) {
        o["default"] = v;
      });
var __decorate =
  (this && this.__decorate) ||
  function (decorators, target, key, desc) {
    var c = arguments.length,
      r =
        c < 3
          ? target
          : desc === null
            ? (desc = Object.getOwnPropertyDescriptor(target, key))
            : desc,
      d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if ((d = decorators[i]))
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
var __importStar =
  (this && this.__importStar) ||
  function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null)
      for (var k in mod)
        if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
          __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
  };
var __metadata =
  (this && this.__metadata) ||
  function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoggerService = void 0;
const common_1 = require("@nestjs/common");
const winston = __importStar(require("winston"));
let LoggerService = class LoggerService {
  constructor() {
    this.logger = winston.createLogger({
      transports: [
        new winston.transports.Console({
          format: winston.format.combine(
            winston.format.timestamp(),
            winston.format.printf(({ level, message, timestamp }) => {
              return `${timestamp} ${level}: ${message}`;
            }),
          ),
        }),
      ],
    });
  }
  log(message) {
    this.logger.log("info", message);
  }
  error(message, trace) {
    this.logger.error(message, { trace });
  }
  warn(message) {
    this.logger.warn(message);
  }
  debug(message) {
    this.logger.debug(message);
  }
  verbose(message) {
    this.logger.verbose(message);
  }
};
exports.LoggerService = LoggerService;
exports.LoggerService = LoggerService = __decorate(
  [(0, common_1.Injectable)(), __metadata("design:paramtypes", [])],
  LoggerService,
);
//# sourceMappingURL=logger.service.js.map
