import { Schema } from "mongoose";

export const ColonySchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    planetId: { type: Schema.Types.ObjectId, ref: 'Planet', required: true }
}, { timestamps: true, toJSON: { virtuals: true } })

ColonySchema.virtual('Planet', {
    localField: 'planetId',
    ref: 'Planet',
    foreignField: '_id',
    count: true,
    justOne: true,
})