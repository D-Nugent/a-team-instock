const express = require("express");
const app = express();
const router = express.Router();
const inventories = require("./routes/inventories.json");

router.route("/").get((req, res) => {
  res.status(200).send(inventories);
});

router.route("/:id").get((req, res) => {
  res.status(200).send(inventories.filter((item) => item.id === req.params.id).shift());
});

router.route("/new").post((req, res) => {
  const { item, description, category, status, quantity, warehouse } = req.body;

  let inventoryNew = {
    id: uuidv4(),
    item,
    description,
    category,
    status,
    quantity,
    warehouse,
  };

  inventories.push(inventoryNew);

  res.status(201).send(inventoryNew);
});

module.exports = router;
