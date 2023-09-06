import { dbContext } from "../db/DbContext.js";

class PlanetService {

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