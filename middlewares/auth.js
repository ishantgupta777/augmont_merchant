const admin = require('../utils/firebase');

function auth(req, res, next) {
  console.log('req, headers', req.headers);
  if (req.headers['x-auth-token']) {
    admin
      .auth()
      .verifyIdToken(req.headers['x-auth-token'])
      .then(decodedToken => {
        console.log('_________TOKEN_________', decodedToken);
        req.decodedToken = decodedToken;
        next();
      })
      .catch(er => {
        console.error('Error ocurred while decoding token', er);
        return res.status(500).send({
          message: 'Error ocurred while decoding',
          success: false,
          error: er,
        });
      });
  } else {
    return res.status(401).send({ message: 'Not Authorized', success: false });
  }
}

module.exports = auth;
