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
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormFieldTemplateService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
let FormFieldTemplateService = class FormFieldTemplateService {
  async create(data) {
    return prisma.formFieldTemplate.create({ data });
  }
  async findAll() {
    return prisma.formFieldTemplate.findMany({ include: { fields: true } });
  }
  async findOne(id) {
    return prisma.formFieldTemplate.findUnique({
      where: { id },
      include: { fields: true },
    });
  }
  async update(id, data) {
    return prisma.formFieldTemplate.update({ where: { id }, data });
  }
  async remove(id) {
    return prisma.formFieldTemplate.delete({ where: { id } });
  }
};
exports.FormFieldTemplateService = FormFieldTemplateService;
exports.FormFieldTemplateService = FormFieldTemplateService = __decorate(
  [(0, common_1.Injectable)()],
  FormFieldTemplateService,
);
//# sourceMappingURL=formFieldTemplate.service.js.map
