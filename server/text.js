const db = require('../db') //this is required
const Text = require('../db/models/text');

const router = require('express').Router()

router.get('/', function (req, res, next) {
  Text.findAll()
    .then(result => {
      res.status(200).send(result);
    })
    .catch(next);
});

// router.get('/:id', function (req, res, next) {
//   Product.findOne({
//     where: { id: req.params.id },
//     include: [Review]
//   })
//     .then(result => {
//       res.status(200).send(result);
//     })
//     .catch(next);
// });

module.exports = router