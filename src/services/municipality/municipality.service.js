const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getMunicipalities = async () => {
  try {
    const municipalities = await prisma.municipality.findMany();
    return municipalities;
  } catch (error) {
    console.error("Error fetching munipalities:", error);
    throw new Error("Error fetching munipalities");
  }
};

module.exports = { getMunicipalities };
