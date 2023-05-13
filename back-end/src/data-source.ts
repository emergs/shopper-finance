import { DataSource } from "typeorm";
import "dotenv/config";

const AppDataSource = new DataSource({
  type: "mysql",
  host: process.env.HOST,
  port: 3306,
  username: process.env.MDB_USER,
  password: process.env.MDB_PASSWORD,
  database: process.env.MDB_DB,
  logging: true,
  synchronize: false,
});

export default AppDataSource;
