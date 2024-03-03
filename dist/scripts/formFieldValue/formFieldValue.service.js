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
exports.FormFieldValueService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
let FormFieldValueService = class FormFieldValueService {
  async create(data) {
    return prisma.formFieldValue.create({ data });
  }
  async findAll() {
    return prisma.formFieldValue.findMany({ include: { fields: true } });
  }
  async findOne(id) {
    return prisma.formFieldValue.findUnique({
      where: { id },
      include: { fields: true },
    });
  }
  async update(id, data) {
    return prisma.formFieldValue.update({ where: { id }, data });
  }
  async remove(id) {
    return prisma.formFieldValue.delete({ where: { id } });
  }
};
exports.FormFieldValueService = FormFieldValueService;
exports.FormFieldValueService = FormFieldValueService = __decorate(
  [(0, common_1.Injectable)()],
  FormFieldValueService,
);
//# sourceMappingURL=formFieldValue.service.js.map
