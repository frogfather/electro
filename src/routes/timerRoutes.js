import express from "express";
import { getElectroTimerStatus, setElectroTimerStatus, startElectroTimer, stopElectroTimer, getSensorReadings } from "../controllers/timerController.js";

const router = express.Router();

router.route('/start').put(startElectroTimer);

router.route('/stop').put(stopElectroTimer);

router.route('/status').put(setElectroTimerStatus).get(getElectroTimerStatus);

router.route('/sensors').get(getSensorReadings);

export { router as timerRouter }
