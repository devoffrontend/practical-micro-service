import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import morgan from "morgan";
import createInventory from "./controllers/createInventory";
import getInventories from "./controllers/getInventories";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.get("/health", (_req, res) => {
  res.status(200).json({ status: "UP" });
});

app.post("/inventories", createInventory);
app.get("/inventories", getInventories);

// 404 handle
app.use((_req, res) => {
  res.status(404).json({ message: "Not found!" });
});

// error handle
app.use((err, _req, res, _next) => {
  console.log(err);
  res.status(500).json({ message: "Internal server errorsss!" });
});

const port = process.env.PORT || 4002;
const serviceName = process.env.SERVICE_NAME || "inventory-service";

app.listen(port, () => {
  console.log(`${serviceName} is listenning on port ${port}`);
});
