const express = require("express");
const app = express();
const dotenv = require("dotenv");
const warehouseRoute = require("./api/warehouseRoutes");
const inventoryRoute = require("./api/inventoryRoutes");

dotenv.config();

app.use(express.json());

app.use((req, res, next) => {
  console.log(`The path '${req.path}' was targeted at ${new Date().toLocaleTimeString()}`);
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use("/warehouse", warehouseRoute);
app.use("/inventory", inventoryRoute);
app.listen(process.env.PORT, (error) => (error ? console.error(error) : console.info("Running like a champ")));
