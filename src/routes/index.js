const router = require("express").Router();
const authRoute = require("./auth/auth.route");

router.use("/auth", authRoute);

// Delete after testing
router.get("/", (req, res) => {
  res.send("Hello World from the API");
});

module.exports = router;
