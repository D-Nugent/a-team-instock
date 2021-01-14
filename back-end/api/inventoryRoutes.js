const express = require("express");
const app = express();
const router = express.Router();
const inventories = require("./routes/inventories.json");

router.route("/")
.get((req, res) => {
  res.status(200).send(inventories);
});

router.route("/:id")
.get((req, res) => {
  res.status(200).send(inventories.filter(item => item.id === req.params.id).shift())
})

module.exports = router;
