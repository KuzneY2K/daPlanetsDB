import BaseController from "../utils/BaseController.js";
import { logger } from "../utils/Logger.js";
import { galaxyService } from "../services/GalaxyService.js";

export class GalaxyController extends BaseController {
    constructor() {
        super('api/galaxies')
        this.router
            .post('', this.createGalaxy)
            .get('', this.getGalaxyAll)
            .delete('/:galaxyId', this.deleteGalaxy)
    }

    async deleteGalaxy(request, response, next) {
        try {
            let galaxyId = request.params.galaxyId
            logger.log('[DELETING GALAXY 💥]')
            let deletedGalaxy = await galaxyService.deleteGalaxy(galaxyId)
            response.send(deletedGalaxy)
        } catch (error) {
            next(error)
        }
    }

    async createGalaxy(request, response, next) {
        try {
            logger.log('[CREATING GALAXY 🌌]')
            let data = request.body
            let galaxy = await galaxyService.createGalaxy(data)
            response.send(galaxy)
        } catch (error) {
            next(error)
        }
    }

    async getGalaxyAll(request, response, next) {
        try {
            logger.log('[GETTING ALL GALAXIES 🌠]')
            let galaxyAll = await galaxyService.getGalaxyAll()
            response.send(galaxyAll)
        } catch (error) {
            next(error)
        }
    }
}