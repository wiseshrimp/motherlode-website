const db = require('../db')
const User = require('../db/models/user')

const router = require('express').Router()

let auth = function (req, res, next) {
  if (req.session && req.session.user === "motherlode" && req.session.admin)
    return next();
  else
    return res.sendStatus(401);
};

router.get('/login', (req, res, next) => {
  if (!req.query.username || !req.query.password) {
    res.send('login failed');
  } else if (req.query.username === "amy" || req.query.password === "amyspassword") {
    req.session.user = "amy";
    req.session.admin = true;
    res.send("login success!");
  }
})

router.get('/logout', (req, res, next) => {
  req.session.destroy();
  res.send("logout success!");
})

router.get('/content', auth, function (req, res) {
  res.send("You can only see this after you've logged in.");
});