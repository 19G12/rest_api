import mongoose from "mongoose";

const sampleSchema = new mongoose.Schema({
    name: String,
    availability: {type: String, require: true},
});

export default mongoose.model("Trains", sampleSchema);