const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  if (req.session.email !== null && req.session.email !== undefined) {
    next();
  } else {
    let token = req.headers['x-access-token'] || req.headers.authorization;
    if (token) {
      if (token.startsWith('Bearer ')) {
        token = token.slice(7, token.length);
      }
      jwt.verify(token, process.env.AUTH_STRING, (err, decoded) => {
        if (err) {
          res.sendStatus(401);
        } else {
          req.decoded = decodedl
          next();
        }
      });
    } else {
      res.sendStatus(401);
    }
  }
};