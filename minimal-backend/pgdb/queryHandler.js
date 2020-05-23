import { Pool } from "pg";
import dotenv from "dotenv";

dotenv.config();

const {
  DEV_DB_USER,
  DEV_DB_PASSWORD,
  DEV_HOST,
  DEV_DB,
  DEV_PORT,
} = process.env;

const pool = new Pool({
  user: DEV_DB_USER,
  host: DEV_HOST,
  database: DEV_DB,
  password: DEV_DB_PASSWORD,
  port: DEV_PORT,
});

export default {
  query(text, params) {
    return new Promise((resolve, reject) => {
      pool.query(text, params)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
};