import { Sequelize } from "sequelize";

const db = new Sequelize(
  process.env.DB_NAME || "node_db", 
  process.env.DB_USER || "root", 
  process.env.DB_PASSWORD || "", 
 {
  host: process.env.DB_HOST || "mysql",
  dialect: "mysql",
 }
);

export default db;
