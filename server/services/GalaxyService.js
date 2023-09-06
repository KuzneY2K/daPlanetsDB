import { dbContext } from "../db/DbContext.js";
import { BadRequest } from "../utils/Errors.js";

class GalaxyService {
    async deleteGalaxy(galaxyId) {
        let deleteGalaxy = await dbContext.Galaxy.findById(galaxyId)
        if (!deleteGalaxy) {
            throw new BadRequest('[INVALID GALAXY. DOES IT EXIST?]')
        }
        await deleteGalaxy.remove()
        return `${deleteGalaxy.name} was destroyed. RIP to all the inhabitants. 💀`
    }
    async getGalaxyAll() {
        let galaxyAll = await dbContext.Galaxy.find()
        return galaxyAll
    }
    async createGalaxy(body) {
        let newGalaxy = await dbContext.Galaxy.create(body)
        return newGalaxy
    }

}

export const galaxyService = new GalaxyService()