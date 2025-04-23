const router = require("express").Router();
const MunicipalityController = require("../../controllers/municipality/municipality.controller");

router.get("/", MunicipalityController.getMunicipalities);

module.exports = router;
