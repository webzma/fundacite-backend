function isEmailValid(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function validName(name) {
  return typeof name === "string" && name.length > 3;
}

function isUniqueNumericId(id, users) {
  return typeof id === "number" && !users.some((user) => user.id === id);
}

// VALIDAR PASSWORD

function validateUser(user, users) {
  const { id, name, email } = user;
  console.log(email);

  if (!isUniqueNumericId(id, users)) {
    return {
      isValid: false,
      error: "ID must be a unique number",
    };
  }

  if (!validName(name)) {
    return {
      isValid: false,
      error: "Name must be a string with at least 3 characters",
    };
  }

  if (!isEmailValid(email)) {
    return {
      isValid: false,
      error: "Email must be a valid email address",
    };
  }

  return {
    isValid: true,
  };
}

module.exports = {
  isEmailValid,
  validName,
  isUniqueNumericId,
  validateUser,
};
