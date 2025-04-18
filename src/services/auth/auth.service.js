const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const loginUser = async (email, password) => {
  if (!email || !password) {
    throw new Error("Email and password are required");
  }

  try {
    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) {
      throw new Error("Invalid email or password");
    }

    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword) {
      throw new Error("Invalid email or password");
    }

    if (!process.env.JWT_SECRET) {
      throw new Error("JWT_SECRET is not defined");
    }

    const token = jwt.sign(
      { id: user.id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    return { token, user };
  } catch (error) {
    console.error("Error during login:", error.message);
    throw new Error("An error occurred during login");
  }
};

const registerUser = async (name, email, password) => {
  console.log(name, email, password);

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });

  return newUser;
};

module.exports = {
  loginUser,
  registerUser,
};
