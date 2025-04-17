import Readings from "../../models/Readings";

export const getAllReadings = () => {
        return Readings.findAndCountAll({
            where: {},
            limit: 40,
            order: [["id", "DESC"]];
        })
    }