const bcrypt = require('bcrypt');
async function checkPass(password, dbPass) {
    const isSame = await bcrypt.compare(password, dbPass);
    return isSame
}

//todo => add hased password here

module.exports = {
    checkPass
}