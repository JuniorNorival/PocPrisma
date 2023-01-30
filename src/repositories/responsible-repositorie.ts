import prisma from "../database/db.js";

const createResponsible = async (name: string) => {
  return await prisma.responsible.create({ data: { name: name } });
};
export { createResponsible };
