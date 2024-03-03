"use strict";
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
var __metadata =
  (this && this.__metadata) ||
  function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
var __param =
  (this && this.__param) ||
  function (paramIndex, decorator) {
    return function (target, key) {
      decorator(target, key, paramIndex);
    };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormTemplateController = void 0;
const common_1 = require("@nestjs/common");
const formTemplate_service_1 = require("./formTemplate.service");
const client_1 = require("@prisma/client");
let FormTemplateController = class FormTemplateController {
  constructor(formTemplateService) {
    this.formTemplateService = formTemplateService;
  }
  create(createDto) {
    return this.formTemplateService.create(createDto);
  }
  findAll() {
    return this.formTemplateService.findAll();
  }
  findOne(id) {
    return this.formTemplateService.findOne(+id);
  }
  update(id, updateDto) {
    return this.formTemplateService.update(+id, updateDto);
  }
  remove(id) {
    return this.formTemplateService.remove(+id);
  }
};
exports.FormTemplateController = FormTemplateController;
__decorate(
  [
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0),
  ],
  FormTemplateController.prototype,
  "create",
  null,
);
__decorate(
  [
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0),
  ],
  FormTemplateController.prototype,
  "findAll",
  null,
);
__decorate(
  [
    (0, common_1.Get)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0),
  ],
  FormTemplateController.prototype,
  "findOne",
  null,
);
__decorate(
  [
    (0, common_1.Patch)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0),
  ],
  FormTemplateController.prototype,
  "update",
  null,
);
__decorate(
  [
    (0, common_1.Delete)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0),
  ],
  FormTemplateController.prototype,
  "remove",
  null,
);
exports.FormTemplateController = FormTemplateController = __decorate(
  [
    (0, common_1.Controller)("formTemplate"),
    __metadata("design:paramtypes", [
      formTemplate_service_1.FormTemplateService,
    ]),
  ],
  FormTemplateController,
);
//# sourceMappingURL=formTemplate.controller.js.map