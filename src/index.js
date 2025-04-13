import "dotenv/config";
import express from "express";
import https from "https";
import fs from "fs";
import { statusRoutes } from "../src/routes/statusRoutes.js";

const port = process.env.PORT || 3000;
const app = express();
const router = express.Router();

app.use("/", statusRoutes);

(async () => {

  https.createServer(
    {
      key: fs.readFileSync("key.pem"),
      cert: fs.readFileSync("cert.pem")
    },
    app
  ).listen(port, async () => {
    console.log(`Express is listening at https://localhost:${port}`);
  });
})();


export { app };
