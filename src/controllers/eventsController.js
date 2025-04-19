import expressAsyncHandler from "express-async-handler";
import { getAllEvents } from "../services/eventsService.js";

export const getEvents = expressAsyncHandler(async(req, res) => {
    try {
        const result = await getAllEvents();
        res.status(200).json({
            value: result.rows,
            totalCount: result.count
            })
        } catch (err) {
            res.status(500).json({
                error: err,
            })
        }
});
