const jwt = require("jsonwebtoken");

function AuthMiddleWare(req, res, next) {
  const token = req.headers.authorization;
  if (token) {
    jwt.verify(token, "test", (err, decode) => {
      if (!decode) {
        res.send("Authorization Failed!");
      } else {
        req.body.author = decode.UserId;
        // console.log(decode);
        next();
      }
    });
  } else {
    res.send("Token not found");
  }
}

module.exports = { AuthMiddleWare };
