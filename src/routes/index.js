const router = require("express").Router();
const authRoute = require("./auth/auth.route");
const studentRoute = require("./student/student.route");

router.use("/auth", authRoute);
router.use("/students", studentRoute);

// Delete after testing
router.get("/", (req, res) => {
  res.send("Hello World from the API");
});

module.exports = router;
