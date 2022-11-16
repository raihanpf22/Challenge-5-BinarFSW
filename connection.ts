import { Sequelize } from "sequelize-typescript";
import { Car } from "./models/Car";
require("dotenv").config();

const connection = new Sequelize({
  dialect: "postgres",
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  models: [Car],
});

export default connection;
