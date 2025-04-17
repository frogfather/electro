import Readings from "../../models/readings.js";

export const getAllReadings = () => {
        return Readings.findAndCountAll({
            where: {},
            limit: 40,
            order: [["id", "DESC"]]
        })
    }
