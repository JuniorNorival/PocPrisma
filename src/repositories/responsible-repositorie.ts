import connection from "../database/db.js";
import { Responsible } from "../protocols/responsible.js";

const createResponsible = async (name: Responsible) => {
  return (
    await connection.query(`INSERT INTO responsible (name) VALUES($1))`, [name])
  ).rowCount;
};

export { createResponsible };
