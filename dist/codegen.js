"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config = {
  overwrite: true,
  schema: "src/graphql/schema.gql",
  generates: {
    "src/generated/graphql.ts": {
      plugins: [
        "typescript",
        "typescript-resolvers",
        "typescript-document-nodes",
      ],
    },
    "./graphql.schema.json": {
      plugins: ["introspection"],
    },
  },
};
exports.default = config;
//# sourceMappingURL=codegen.js.map
