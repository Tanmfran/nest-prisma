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
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormFieldTemplate = exports.FormTemplate = void 0;
const graphql_1 = require("@nestjs/graphql");
let FormTemplate = class FormTemplate {};
exports.FormTemplate = FormTemplate;
__decorate(
  [
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number),
  ],
  FormTemplate.prototype,
  "id",
  void 0,
);
__decorate(
  [(0, graphql_1.Field)(), __metadata("design:type", String)],
  FormTemplate.prototype,
  "name",
  void 0,
);
__decorate(
  [(0, graphql_1.Field)({ nullable: true }), __metadata("design:type", String)],
  FormTemplate.prototype,
  "description",
  void 0,
);
__decorate(
  [
    (0, graphql_1.Field)(() => [FormFieldTemplate], {
      nullable: "itemsAndList",
    }),
    __metadata("design:type", Array),
  ],
  FormTemplate.prototype,
  "fields",
  void 0,
);
__decorate(
  [(0, graphql_1.Field)(), __metadata("design:type", Date)],
  FormTemplate.prototype,
  "createdAt",
  void 0,
);
__decorate(
  [(0, graphql_1.Field)(), __metadata("design:type", Date)],
  FormTemplate.prototype,
  "updatedAt",
  void 0,
);
exports.FormTemplate = FormTemplate = __decorate(
  [(0, graphql_1.ObjectType)()],
  FormTemplate,
);
let FormFieldTemplate = class FormFieldTemplate {};
exports.FormFieldTemplate = FormFieldTemplate;
__decorate(
  [
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number),
  ],
  FormFieldTemplate.prototype,
  "id",
  void 0,
);
__decorate(
  [(0, graphql_1.Field)(), __metadata("design:type", String)],
  FormFieldTemplate.prototype,
  "label",
  void 0,
);
__decorate(
  [(0, graphql_1.Field)(), __metadata("design:type", String)],
  FormFieldTemplate.prototype,
  "fieldType",
  void 0,
);
__decorate(
  [(0, graphql_1.Field)({ nullable: true }), __metadata("design:type", String)],
  FormFieldTemplate.prototype,
  "placeholder",
  void 0,
);
__decorate(
  [(0, graphql_1.Field)(), __metadata("design:type", Boolean)],
  FormFieldTemplate.prototype,
  "required",
  void 0,
);
__decorate(
  [
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number),
  ],
  FormFieldTemplate.prototype,
  "order",
  void 0,
);
__decorate(
  [(0, graphql_1.Field)(), __metadata("design:type", Date)],
  FormFieldTemplate.prototype,
  "createdAt",
  void 0,
);
__decorate(
  [(0, graphql_1.Field)(), __metadata("design:type", Date)],
  FormFieldTemplate.prototype,
  "updatedAt",
  void 0,
);
exports.FormFieldTemplate = FormFieldTemplate = __decorate(
  [(0, graphql_1.ObjectType)()],
  FormFieldTemplate,
);
//# sourceMappingURL=form-template.js.map
