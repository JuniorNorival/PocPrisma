import prisma from "../src/database/db.js";

async function main() {
  const responsible = prisma.responsible.findMany();
  if (!responsible) {
    const newResponsible = await prisma.responsible.createMany({
      data: [{ name: "Arlindo" }, { name: "Pericles" }, { name: "Martinho" }],
    });
    console.log({ newResponsible });
  }
}
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
