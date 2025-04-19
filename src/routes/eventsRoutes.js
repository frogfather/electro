import express from "express";
import getEvents from "../controllers/eventsController";

const router = express.Router();

router.route('/').get(getEvents);

export { router as eventsRoutes };