import expressAsyncHandler from "express-async-handler";
import { getAllReadings } from "../services/readingsService.js";

export const getReadings = expressAsyncHandler(async(req, res) => {
    try {
        const result = await getAllReadings();
        res.status(200).json({
            value: result.rows,
            totalCount: result.count
            })
        } catch (err) {
            res.status(500).json({
                error: err
            })
        }
});
