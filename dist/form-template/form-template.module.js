"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormTemplateModule = void 0;
const common_1 = require("@nestjs/common");
const form_template_service_1 = require("./form-template.service");
const form_template_controller_1 = require("./form-template.controller");
let FormTemplateModule = class FormTemplateModule {
};
exports.FormTemplateModule = FormTemplateModule;
exports.FormTemplateModule = FormTemplateModule = __decorate([
    (0, common_1.Module)({
        providers: [form_template_service_1.FormTemplateService],
        controllers: [form_template_controller_1.FormTemplateController]
    })
], FormTemplateModule);
//# sourceMappingURL=form-template.module.js.map