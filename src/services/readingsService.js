import db from "../../models/index.cjs";

export const getAllReadings = () => {
        try {
            return db.Reading.findAndCountAll({
                where: {},
                limit: 40,
                order: [["id", "DESC"]]
            })
        } catch (err) {
            console.error(`Error retrieving readings`);
            throw err;
        }
    };

export const createReading = (reading) => {
    try {
        return db.Reading.create(reading);
    } catch (err) {
        console.error(`Error creating new reading ${err}`);
        throw err;
    }
    
}
