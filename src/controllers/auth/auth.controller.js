const authService = require("../../services/auth/auth.service");
const validations = require("../../utils/validations");

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(email, password);

    const { token, user } = await authService.loginUser(email, password);
    return res.status(200).json({ token, user });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

const register = async (req, res) => {
  try {
    const { email, password, name } = req.body;

    const validatedEmail = validations.isEmailValid(email);
    const validatedName = validations.validName(name);
    // Validar password

    if (!validatedEmail) {
      return res.status(400).json({
        message: "Validations Errors",
      });
    }

    if (!validatedName) {
      return res.status(400).json({
        message: "Validations Errors",
      });
    }

    await authService.registerUser(name, email, password);

    return res.status(201).json({
      message: "User registered sucessfully",
    });
  } catch (error) {
    return res.status(500).json({ error: "Something went wrong" });
  }
};

module.exports = {
  login,
  register,
};
