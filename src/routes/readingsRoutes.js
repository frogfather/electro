import express from "express";
import { getReadings } from "../controllers/readingsController.js";

const router = express.Router();

router.route('/').get(getReadings);

export { router as readingsRoutes };
