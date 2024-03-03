import { ObjectType, Field, Int } from "@nestjs/graphql";
@ObjectType() // This decorator marks the class as a GraphQL type.
export class FormTemplate {
  @Field(() => Int) // The `@Field` decorator exposes this field in the GraphQL schema.
  id: number;

  @Field()
  name: string;

  @Field({ nullable: true }) // `nullable: true` allows this field to be null in the GraphQL schema.
  description?: string;

  @Field(() => [FormFieldTemplate], { nullable: "itemsAndList" }) // This indicates that both the array and its items can be null.
  fields: FormFieldTemplate[];

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}

@ObjectType()
export class FormFieldTemplate {
  @Field(() => Int)
  id: number;

  @Field()
  label: string;

  @Field()
  fieldType: string;

  @Field({ nullable: true })
  placeholder?: string;

  @Field()
  required: boolean;

  @Field(() => Int)
  order: number;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
