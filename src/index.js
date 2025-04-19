import "dotenv/config";
import express from "express";
import https from "https";
import fs from "fs";
import { statusRoutes } from "../src/routes/statusRoutes.js";
import { readingsRoutes } from "../src/routes/readingsRoutes.js"
import ElectroTimer from "../src/lib/electroTimer.js";
import { timerRouter } from "../src/routes/timerRoutes.js";

const port = process.env.PORT || 3000;
const app = express();
const router = express.Router();

app.use(express.json());

app.use("/api/v1/status/", statusRoutes);
app.use("/api/v1/timer/", timerRouter);
app.use("/api/v1/readings",readingsRoutes);

const electroTimer = new ElectroTimer();
electroTimer.start(false);

export const startTimer = (options) => electroTimer.start(options);
export const stopTimer = () => electroTimer.stop();
export const timerStatus = () => electroTimer.getTimerStatus();
export const setTimerStatus = (options) => electroTimer.setTimerStatus(options);
export const getReadings = () => electroTimer.getReadings();
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
