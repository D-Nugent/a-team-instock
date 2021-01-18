const express = require("express");
const app = express();
const router = express.Router();
const warehouses = require("./routes/warehouses.json");
const inventory = require("./routes/inventories.json");
const { v4: uuidv4 } = require("uuid");

router.route("/").get((req, res) => {
  let filteredArray = [];
const warehousesNew = [...warehouses]
warehousesNew.forEach(warehouse => {
    for (const [key, value] of Object.entries(warehouse.contact)) {
      Object.assign(warehouses[warehouses.indexOf(warehouse)], {[`contact${key}`]: value})
    }
    warehousesNew[warehousesNew.indexOf(warehouse)].contact = ''
});


  warehousesNew.forEach(item => {
  Object.values(item).map(value => {
      let searchValue = isNaN(value)?value.toLowerCase():value.toString();
      let filterValue = req.query.filterValue === undefined?"":req.query.filterValue.toLowerCase();
      if (searchValue.includes(filterValue)) {
        if (filteredArray.indexOf(item) < 0) {
          filteredArray.push(item);
        }
      }
    })
  })
  res.status(200).send(filteredArray);
});

router.route("/warehouse-list").get((req, res) => {
  const warehouseList = warehouses.map((warehouse) => warehouse.name);

  function removeDuplicateCategories(data) {
    return [...new Set(data)];
  }

  const uniqueWarehouses = removeDuplicateCategories(warehouseList);

  res.status(200).send(uniqueWarehouses);
});

router.route("/:id").get((req, res) => {
  console.log("THIS ROUTE RAN");

  res.status(200).send(warehouses.filter(item => item.id === req.params.id).shift())
})
.delete((req, res) => {
let i = 0;
while (i < inventory.length) {
  const item = inventory[i]
  item.warehouseID === req.params.id ?
  inventory.splice(i,1)
  :
  i += 1
}
for (let i = 0; i < warehouses.length; i++) {
  let currentItem = warehouses[i]
  
if (currentItem = req.params.id)
{
warehouses.splice(i, 1);
return res.status(200).send(warehouses)
};
};
  res.status(200).send(inventory)
})

router.route("/:id/inventory").get((req, res) => {
  res.status(200).send(inventory.filter((item) => item.warehouseID === req.params.id));
});




    


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
