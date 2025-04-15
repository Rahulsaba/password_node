const jwt = require('jsonwebtoken');

const generateAccessToken = (user_id) => {
        return  jwt.sign(user_id, process.env.TOKEN_SECRET, {expiresIn: '30d'});
}
module.exports={
    generateAccessToken
}