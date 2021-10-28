var express = require("express");
var router = express.Router();
var models = require("../models");

router.get("/", function(req, res, next) {
  models.users.findAll().then(users => res.json(users));
});

// router.post("/", function(req, res, next) {
//   let newUser = new models.User();
//   newUser.name = req.body.name;
//   newUser.complete = req.body.complete;
//   newUser.save().then(User => res.json(User));
// });

// router.delete("/:id", function(req, res, next) {
//   let UserId = parseInt(req.params.id);
//   models.User.findByPk(UserId)
//     .then(User => User.destroy())
//     .then(() => res.send({ UserId }))
//     .catch(err => res.status(400).send(err));
// });

// router.put("/:id", function(req, res, next) {
//   models.User.update(
//     {
//       name: req.body.name,
//       complete: req.body.complete
//     },
//     {
//       where: { id: parseInt(req.params.id) }
//     }
//   ).then(User => res.json(User));
// });

module.exports = router;