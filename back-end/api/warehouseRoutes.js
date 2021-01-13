const express = require("express");
const app = express();
const router = express.Router();
const warehouses = require("./routes/warehouses.json");

router.route("/").get((req, res) => {
  res.status(200).send(warehouses);
});

module.exports = router;
