import BaseController from "../utils/BaseController.js";
import { planetService } from "../services/PlanetService.js";
import { logger } from "../utils/Logger.js";
import { BadRequest } from "../utils/Errors.js";

export class PlanetController extends BaseController {
    constructor() {
        super('api/planets')
        this.router
            .post('', this.createPlanet)
            .get('', this.getPlanetAll)
            .delete('/:planetId', this.deletePlanet)
    }

    async createPlanet(request, response, next) {
        try {
            logger.log('[CREATING PLANET 🌏]')
            let data = request.body
            let newPlanet = await planetService.createPlanet(data)
            response.send(newPlanet)
        } catch (error) {
            next(error)
        }
    }

    async getPlanetAll(request, response, next) {
        try {
            logger.log('[GETTING ALL PLANETS 🌎🌍🌏]')
            let planets = await planetService.getPlanetAll()
            response.send(planets)
        } catch (error) {
            next(error)
        }
    }

    async deletePlanet(request, response, next) {
        try {
            logger.log('[DESTROYING PLANET 💥]')
            let planetId = request.params.planetId
            let destroyPlanet = await planetService.destroyPlanet(planetId)
            response.send(destroyPlanet)
        } catch (error) {
            next(error)
        }
    }
}