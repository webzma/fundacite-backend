const router = require("express").Router();
const StudentController = require("../../controllers/student/student.controller");

router.get("/", StudentController.getAllStudents);
/* router.get("/students/:id", StudentController.getStudentById);
router.post("/students", StudentController.createStudent);
router.put("/students/:id", StudentController.updateStudent);
router.delete("/students/:id", StudentController.deleteStudent); */

module.exports = router;
