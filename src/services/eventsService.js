import db from "../../models/index.cjs";

export const getAllEvents = () => {
        try {
            return db.Event.findAndCountAll({
                where: {},
                limit: 40,
                order: [["id", "DESC"]]
            })
        } catch (err) {
            console.error(`Error retrieving events`);
            throw err;
        }
    };

export const createEvent = (event) => {
    try {
        return db.Event.create(event);
    } catch (err) {
        console.error(`Error creating new event ${err}`);
        throw err;
    }
    
}