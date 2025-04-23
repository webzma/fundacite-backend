const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getAllStudents = async () => {
  try {
    const students = await prisma.student.findMany();
    return students;
  } catch (error) {
    console.error("Error fetching students:", error);
    throw new Error("Error fetching students");
  }
};

module.exports = { getAllStudents };
