import BaseController from "../utils/BaseController.js";
import { colonyService } from "../services/ColonyService.js";
import { logger } from "../utils/Logger.js";

export class ColonyController extends BaseController {
    constructor() {
        super('api/colonies')
        this.router
            .post('', this.createColony)
            .get('', this.getColonyAll)
            .delete('/:colonyId', this.deleteColony)
            .put('/:colonyId', this.editColony)
    }

    async createColony(request, response, next) {
        try {
            logger.log('[SPAWNING COLONY 👾]')
            let body = request.body
            let newColony = await colonyService.createColony(body)
            response.send(newColony)
        } catch (error) {
            next(error)
        }
    }

    async editColony(request, response, next) {
        try {
            logger.log('[ALTERING DNA SEQUENCE 🧬]')
            let colonyId = request.params.colonyId
            let body = request.body
            let updatedColony = await colonyService.editColony(colonyId, body)
            response.send(updatedColony)
        } catch (error) {
            next(error)
        }
    }

    async deleteColony(request, response, next) {
        try {
            logger.log('[INITIALIZING COLONY VAPORIZER]')
            let colonyId = request.params.colonyId
            let deleteColony = await colonyService.deleteColony(colonyId)
            response.send(deleteColony)
        } catch (error) {
            next(error)
        }
    }

    async getColonyAll(request, response, next) {
        try {
            logger.log('[GETTING ALL COLONIES 🤖]')
            let colony = await colonyService.getColonyAll()
            response.send(colony)
        } catch (error) {
            next(error)
        }
    }
}