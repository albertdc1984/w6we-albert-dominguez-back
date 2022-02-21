const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  const headerAuth = req.headers("Authorization");
  if (!headerAuth) {
    const error = new Error("Token missing");
    next(error);
  } else {
    const token = headerAuth.replace("Bearer", "");
    try {
      jwt.verify(token, process.env.JWT_SECRET);
    } catch (error) {
      error.code = 401;
      next(error);
    }
  }
};

module.exports = auth;
