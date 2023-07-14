import {Sequelize} from 'sequelize';

import pg from "pg";
export const sequelize = new Sequelize(
  'verceldb',
  'default',
  'rOiTy8wQEf5a',
  {
    dialect: 'postgres',
    dialectModule: pg,
    host: 'ep-dark-sound-972921-pooler.us-east-1.postgres.vercel-storage.com',
    dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false, // Use this option for self-signed certificates
        },
        sslmode: 'require',
      },
  },
);

export const testDbConnection = async () => {
    try {
      await sequelize.authenticate();
      console.log("Connection has been established successfully.");
    } catch (error) {
      console.error("Unable to connect to the database:", error);
    }
  };