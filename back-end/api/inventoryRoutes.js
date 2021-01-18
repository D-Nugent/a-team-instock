const express = require("express");
const app = express();
const router = express.Router();
const inventories = require("./routes/inventories.json");
const warehouses = require("./routes/warehouses.json");
const { v4: uuidv4 } = require("uuid");

router.route("/").get((req, res) => {
  res.status(200).send(inventories);
});

router.route("/categories").get((req, res) => {
  const categories = inventories.map((inventory) => inventory.category);

  function removeDuplicateCategories(data) {
    return [...new Set(data)];
  }

  const uniqueCategories = removeDuplicateCategories(categories);

  res.status(200).send(uniqueCategories);
});

router.route("/new-item").post((req, res) => {
  const { itemName, description, category, status, quantity, warehouseName } = req.body;

  const currentWarehouseID = warehouses.find((warehouse) => {
    if (warehouse.name === warehouseName) {
      return warehouse.id;
    }
  });

  let newItem = {
    id: uuidv4(),
    warehouseID: currentWarehouseID.id,
    itemName,
    description,
    category,
    status,
    quantity,
    warehouseName,
  };

  inventories.push(newItem);

  res.status(201).send(newItem);
});

router.route("/:id").get((req, res) => {
  res.status(200).send(inventories.filter((item) => item.id === req.params.id).shift());
});

router.route("/:id").delete((req, res) => {
  for (let i = 0; i < inventories.length; i++) {
    let currentItem = inventories[i];
    if ((currentItem = req.params.id)) {
      inventories.splice(i, 1);
      return res.status(200).send(inventories);
    }
  }
});

router.route("/:id/edit").put((req, res) => {
  const { itemName, description, category, status, quantity, warehouseName } = req.body;

  const requestedItemId = req.params.id;
  const requestedItem = inventories.findIndex((inventory) => inventory.id === requestedItemId);

  inventories[requestedItem].itemName = itemName;
  inventories[requestedItem].description = description;
  inventories[requestedItem].category = category;
  inventories[requestedItem].status = status;
  inventories[requestedItem].quantity = quantity;
  inventories[requestedItem].warehouseName = warehouseName;

  if (requestedItem) {
    return res.status(200).send(inventories[requestedItem]);
  } else {
    res.status(400).send("Not a valid Item ID.");
  }
});

module.exports = router;
