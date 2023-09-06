import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { ValueSchema } from '../models/Value'
import { GalaxySchema } from '../models/Galaxy.js';
import { PlanetSchema } from '../models/Planet.js';
import { ColonySchema } from '../models/Colony.js';

class DbContext {
  Galaxy = mongoose.model('Galaxy', GalaxySchema)
  Planet = mongoose.model('Planet', PlanetSchema)
  Colony = mongoose.model('Colony', ColonySchema)
}

export const dbContext = new DbContext()
