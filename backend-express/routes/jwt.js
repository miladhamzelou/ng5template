let jwt = require('jsonwebtoken');
let con = require('../utils/constants');
let crypto;
try {
  crypto = require('crypto');
} catch (err) {
  console.log('crypto support is disabled!');
}

module.exports = {
    generateToken: generateToken,
    verify: verifyToken
}

function generateToken(userID){
    return jwt.sign({userID: userID}, userID+con.jwt_con.SECRET_KEY, { expiresIn: 60 * 60 })
}

function verifyToken(req, res, next){
    if(!req.headers.user){ }
    if(req.headers.user && crypto){
        crypto
    }else if(req.headers.user){
        next({verified: true}); //only if is verified
    }
    // console.log('verify token rreq', req)
    // console.log('verify token rres', res)
}