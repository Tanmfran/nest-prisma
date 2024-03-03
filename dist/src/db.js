"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDatabase = void 0;
const pg_1 = require("pg");
const databaseName = "mydb";
const client = new pg_1.Client({
  user: "tannor",
  host: "localhost",
  password: "postgres",
  port: 5432,
  database: "postgres",
});
async function createDatabase() {
  try {
    await client.connect();
    const dbExists = await client.query(
      `SELECT 1 FROM pg_database WHERE datname='${databaseName}'`,
    );
    if (dbExists.rowCount === 0) {
      await client.query(`CREATE DATABASE "${databaseName}"`);
      console.log(`Database ${databaseName} created.`);
    } else {
      console.log(`Database ${databaseName} already exists.`);
    }
  } catch (error) {
    console.error("Could not create database", error);
  } finally {
    await client.end();
  }
}
exports.createDatabase = createDatabase;
//# sourceMappingURL=db.js.map
