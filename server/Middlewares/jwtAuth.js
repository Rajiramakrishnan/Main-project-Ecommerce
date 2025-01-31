const TOKEN_SECRET_KEY = "abcd1234";
const jwt = require("jsonwebtoken");
function protectRoute(req, res, next) {
  console.log("protect route running....");

  const authHeader = req.headers["authorization"];
  console.log("auth header", authHeader);
  const token = authHeader && authHeader.split(" ")[1];
  console.log(token);

  if (!token) {
    return res.status(403).json({ message: "Token Authentication failed." });
  }

  jwt.verify(token, TOKEN_SECRET_KEY, (err, user) => {
    console.log("Error on token authentication", err);
    if (err) {
      if (err.name === "TokenExpiredError") {
        console.log("Token has expired");
        return res
          .status(401)
          .json({ message: "token expired", error: err.message });
      } else {
        return res
          .status(403)
          .json({ message: "Authentication failed.", error: err.message });
      }
    }
    console.log("user jwt", user)
    // req.user = user;
    next();
  });
}

module.exports = { protectRoute };