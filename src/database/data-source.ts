import "reflect-metadata";
import { DataSource } from "typeorm";
import { CreateUsersTable1724197820020 } from "./migrations/1724197820020-CreateUsersTable"
import { CreateSeedUsersTable1724199359235} from "./migrations/1724199359235-CreateSeedUsersTable"
import User from "../app/entities/Users"

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "ferna@123",
  database: "projeto_typeorm",
  synchronize: true,
  logging: false,
  entities: [User],
  migrations: [CreateUsersTable1724197820020, CreateSeedUsersTable1724199359235],
  subscribers: [],
});