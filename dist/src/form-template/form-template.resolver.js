"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormTemplateResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const form_template_service_1 = require("./form-template.service");
const form_template_1 = require("./form-template");
let FormTemplateResolver = class FormTemplateResolver {
    constructor(formTemplateService) {
        this.formTemplateService = formTemplateService;
    }
    findAll() {
        return this.formTemplateService.formTemplates();
    }
};
exports.FormTemplateResolver = FormTemplateResolver;
__decorate([
    (0, graphql_1.Query)(() => [form_template_1.FormTemplate], { name: 'formTemplates' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], FormTemplateResolver.prototype, "findAll", null);
exports.FormTemplateResolver = FormTemplateResolver = __decorate([
    (0, graphql_1.Resolver)(() => form_template_1.FormTemplate),
    __metadata("design:paramtypes", [form_template_service_1.FormTemplateService])
], FormTemplateResolver);
//# sourceMappingURL=form-template.resolver.js.map