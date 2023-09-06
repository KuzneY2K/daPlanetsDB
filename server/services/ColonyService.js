import { DbConnection } from "../db/DbConfig.js";
import { dbContext } from "../db/DbContext.js";

class ColonyService {

    async deleteColony(colonyId) {
        let colonyToDelete = await dbContext.Colony.findById(colonyId)
        colonyToDelete.remove()
        return `${colonyToDelete.name} was obliterated and vaporized into thin air. RIP.`
    }

    async createColony(body) {
        let newColony = await dbContext.Colony.create(body)
        await newColony.populate('Planet')
        return `Today is the inception of the ${newColony.name} colony.`
    }

    async getColonyAll() {
        let colony = await dbContext.Colony.find()
        return colony
    }

}

export const colonyService = new ColonyService()