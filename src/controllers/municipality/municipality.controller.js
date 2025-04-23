const municipalityService = require("../../services/municipality/municipality.service");

const getMunicipalities = async (req, res) => {
  try {
    const municipalities = await municipalityService.getMunicipalities();
    res.status(200).json(municipalities);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al obtener los estudiantes", error });
  }
};

module.exports = {
  getMunicipalities,
};
