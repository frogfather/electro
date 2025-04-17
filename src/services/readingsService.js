import db from "../../models/index.cjs";

export const getAllReadings = () => {
        return db.Readings.findAndCountAll({
            where: {},
            limit: 40,
            order: [["id", "DESC"]]
        })
    }
