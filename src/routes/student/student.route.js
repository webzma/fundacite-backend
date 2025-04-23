const router = require("express").Router();
const StudentController = require("../../controllers/student/student.controller");

router.get("/", StudentController.getAllStudents);

module.exports = router;
