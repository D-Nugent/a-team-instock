const express = require("express");
const app = express();
const router = express.Router();
const warehouses = require("./routes/warehouses.json");
const inventory = require("./routes/inventories.json");
const { v4: uuidv4 } = require("uuid");

router.route("/").get((req, res) => {
  res.status(200).send(warehouses);
});

router.route("/:id")
.get((req, res) => {
  res.status(200).send(warehouses.filter(item => item.id === req.params.id).shift())
})

router.route("/:id/inventory")
.get((req, res) => {
  res.status(200).send(inventory.filter(item => item.warehouseID === req.params.id))
})

router.route("/new").post((req, res) => {
  const { warehouse, address, city, country, contact, position, number, email } = req.body;

  let warehouseNew = {
    id: uuidv4(),
    warehouse,
    address,
    city,
    country,
    contact,
    position,
    number,
    email,
  };

  warehouses.push(warehouseNew);

  res.status(201).send(warehouseNew);
});

module.exports = router;
