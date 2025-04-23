const router = require("express").Router();
const authRoute = require("./auth/auth.route");
const studentRoute = require("./student/student.route");
const municipalityRoute = require("./municipality/municipality.route");

router.use("/auth", authRoute);
router.use("/students", studentRoute);
router.use("/municipality", municipalityRoute);

module.exports = router;
