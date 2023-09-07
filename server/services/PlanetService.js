import { dbContext } from "../db/DbContext.js";

class PlanetService {
    async editPlanet(planetId, updatedPlanet) {
        let planetToEdit = await dbContext.Planet.findById(planetId)
        planetToEdit.name = updatedPlanet.name ? updatedPlanet.name : planetToEdit.name
        planetToEdit.biome = updatedPlanet.biome ? updatedPlanet.biome : planetToEdit.biome
        planetToEdit.atmosphere = updatedPlanet.atmosphere ? updatedPlanet.atmosphere : planetToEdit.atmosphere
        planetToEdit.save()
        return planetToEdit
    }
    async destroyPlanet(planetId) {
        let planetToDestroy = await dbContext.Planet.findById(planetId)
        planetToDestroy.remove()
        return `${planetToDestroy.name} was violently shattered and vaporized into the vaccum.`
    }
    async getPlanetsByGalaxyId(galaxyId) {
        let planets = await dbContext.Planet.find({ galaxyId: galaxyId }).populate('Galaxy')
        return planets
    }

    async createPlanet(data) {
        let newPlanet = await dbContext.Planet.create(data)
        await newPlanet.populate('Galaxy')
        return `${newPlanet.name} has been created out of thin air.`
    }

    async getPlanetAll() {
        let planets = dbContext.Planet.find().populate('Galaxy')
        return planets
    }

}

export const planetService = new PlanetService()