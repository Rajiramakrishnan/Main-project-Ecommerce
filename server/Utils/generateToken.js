const jwt = require('jsonwebtoken')
const SECRET_KEY = "abcd1234"
const genToken = (payload) => {
    const token = jwt.sign(payload, SECRET_KEY,{expiresIn:'24h'});
    return token;
}

module.exports = {genToken}