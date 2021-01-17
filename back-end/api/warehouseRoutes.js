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

// function editWarehouse(id, data) {
//   const warehouseArr = listWarehouses()
//   const itemIndex = warehouseArr.findIndex((item) => item.id === id)
//   itemsArr.splice(itemIndex, 1, {
//       id: this.state.currentWarehouse.id,
//       name: data.name,
//       address: data.address,
//       city: data.city,
//       country: data.country,
//       contact: [
//         {
//           name: data.contact,
//           position: data.position,
//           phone: data.phone,
//           email: data.email,
//         },
//       ],
//   })
//   // fs.writeFileSync(dataInventories, JSON.stringify(itemsArr))
//   return itemsArr
// }

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

// function patchWarehouse(body){
//     const warehousesArray = listWarehouses();
//     let newWareArray = warehousesArray.filter((warehouses)=>warehouses.id === body.id).pop();

//     if (body.name) {
//         const inventoriesArray = listInventories();
        
//         let newInvArray= inventoriesArray.filter((inventory)=>inventory.warehouseID !== newWareArray.id).map((filteredItem) =>{return{...filteredItem, warehouseName:body.name}});
        
//         let inventoryUpdated = inventoriesArray.filter((inventory)=>inventory.warehouseID !== newWareArray.id);
//         inventoryUpdated = [...inventoryUpdated, ...newInvArray];

//         fs.writeFileSync(dataInventories, JSON.stringify(inventoryUpdated));
       
//     }
//     newWareArray={id:newWareArray.id,
//         name:body.name ? body.name:newWareArray.name,
//         address:body.address ? body.address: newWareArray.address,
//         city:body.city ? body.city:newWareArray.city,
//         country:body.country ? body.country:newWareArray.country,
//         contact:{
//             name:body.contact.name ? body.contact.name:newWareArray.contact.name,
//             position:body.contact.position ? body.contact.position:newWareArray.contact.position,
//             phone:body.contact.phone ? body.contact.phone:newWareArray.contact.phone,
//             email:body.contact.email ? body.contact.email:newWareArray.contact.email,
//         },
//     };
//     const warehouseUpdated = listWarehouses().filter((warehouses)=>warehouses.id !== body.id);

//     warehouseUpdated.push(newWareArray)

//     fs.writeFileSync(dataWarehouses, JSON.stringify(warehouseUpdated));
    
//     return newWareArray
    
// }

// router.patch("/", (req, res) => {
//   res.json(patchWarehouse(req.body))
// })

module.exports = router;
