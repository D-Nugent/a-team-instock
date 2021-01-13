const express = require("express");
const app = express();
const router = express.Router();
const inventories = require("./routes/inventories.json");

router.route("/").get((req, res) => {
  res.status(200).send(inventories);
});

module.exports = router;
