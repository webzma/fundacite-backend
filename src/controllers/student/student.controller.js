const studentService = require("../../services/student/student.service");

const getAllStudents = async (req, res) => {
  try {
    const students = await studentService.getAllStudents();
    res.status(200).json(students);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al obtener los estudiantes", error });
  }
};

module.exports = { getAllStudents };
