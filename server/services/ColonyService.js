import { DbConnection } from "../db/DbConfig.js";
import { dbContext } from "../db/DbContext.js";

class ColonyService {

    async deleteColony(colonyId) {
        let colonyToDelete = await dbContext.Colony.findById(colonyId)
        colonyToDelete.remove()
        return `${colonyToDelete.name} was obliterated and vaporized into thin air. RIP.`
    }

    async editColony(colonyId, updateBody) {
        let colonyToUpdate = await dbContext.Colony.findById(colonyId)
        colonyToUpdate.name = updateBody.name ? updateBody.name : colonyToUpdate.name
        if (!updateBody.description) {
            colonyToUpdate.description = colonyToUpdate.description
        } else if (updateBody.description) {
            colonyToUpdate.description = updateBody.description
        }
        await colonyToUpdate.save()
        return colonyToUpdate
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