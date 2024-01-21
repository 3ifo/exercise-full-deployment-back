import mongoose from "mongoose"
const {Schema, model}= mongoose;

const albumSchema = new Schema({
    titolo: String,
    autore: String,
    anno: Number,
    durata: Number,
})

const Album = model("Album", albumSchema);

export default Album;
