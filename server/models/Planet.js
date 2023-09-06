import { Schema } from "mongoose";

export const PlanetSchema = new Schema({
    name: { type: String, required: true },
    biome: { type: String, required: true },
    atmosphere: { type: Boolean, default: true },
    galaxyId: { type: Schema.Types.ObjectId, ref: 'Galaxy', required: true }
}, { timestamps: true, toJSON: { virtuals: true } })

PlanetSchema.virtual('Galaxy', {
    localField: 'galaxyId',
    ref: 'Galaxy',
    foreignField: '_id',
    count: true,
    justOne: true
})