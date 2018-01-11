var express = require('express');
var loginCollection = require('../models/login');
var userCollection = require('../models/user');
var router = express.Router();

router.route('/')
  .get(getUser)
  .post(register);

router.route('/login')
  .post(login)
  .put(changePassword);

async function register(req, res) {
  if (req.body) {
    var isFound = await checkUser(req.body.uname);
    if (isFound) return res.json({ "success": false, "msg": req.body.uname + " is already present" });
    else if (isFound != undefined) {
      var user = new userCollection({
        firstName: req.body.name.firstName,
        middleName: req.body.name.middleName,
        lastName: req.body.name.lastName,
        uname: req.body.uname,
        password: req.body.password
      });
      user.save(function (err, register) {
        if (err) return res.status(500).send(err);
        res.json({ "success": true });
        var login = new loginCollection({
          uname: req.body.uname,
          password: req.body.password
        });
        login.save();
      });
    } else { return res.json({ "success": false }); }
  } else res.json({ "success": false, "msg": "Please enter all details" });
}

function changePassword(req, res) {
  if (req.body) {
    loginCollection.findOneAndUpdate({
      $and: [
        { "username": req.body.username },
        { "password": req.body.password },
        { "status": "a" }
      ]
    }, {
        $set: {
          "password": req.body.newPassword
        }
      }).exec(function (err, data) {
        if (err) return res.status(500).send(err);
        if (data) res.send({ "success": true });
        else res.send({ "success": false, "msg": "Current Password doesn't match with entered password" });
      });
  }
}

function getUser(req, res) {
  if (req.query) {
    userCollection.findOne({ "uname": req.query.uname }).exec(function (err, user) {
      if (err) return res.status(500).send(err);
      if (user) res.send({ "success": true, "data": user });
      else res.send({ "success": false, "msg": "User Detail not available" });
    });
  } else res.send({ "success": false, "msg": "Please provide user detail" });
}

function checkUser(uname, res) {
  return new Promise((resolve, reject) => {
    loginCollection.findOne({ 'uname': uname }).exec(function (err, isFound) {
      if (isFound) return resolve(true);
      return resolve(false);
    })
  })
}

async function login(req, res) {
  if (req.body.uname && req.body.password) {
    var isFound = await findUserByUsernameAndPassword(req.body);
    if (!isFound.success && isFound.err) return res.status(500).send(err);
    else if (!isFound.success) res.json({ "success": false, "msg": "Please Check Username and Password" });
    else res.json({ "success": true });
  }
}

function findUserByUsernameAndPassword(data) {
  return new Promise(function (resolve, reject) {
    loginCollection.findOne({
      $and: [
        { "username": data.username },
        { "password": data.password },
        { "status": "a" }
      ]
    }).exec(function (err, user) {
      if (err) resolve({ "success": false, "err": err });
      if (user) resolve({ "success": true, "data": user });
      else resolve({ "success": false });
    });
  });
}



module.exports = router;
