export declare class FormTemplate {
  id: number;
  name: string;
  description?: string;
  fields: FormFieldTemplate[];
  createdAt: Date;
  updatedAt: Date;
}
export declare class FormFieldTemplate {
  id: number;
  label: string;
  fieldType: string;
  placeholder?: string;
  required: boolean;
  order: number;
  createdAt: Date;
  updatedAt: Date;
}
