import mongoose from "mongoose"
const {Schema, model}= mongoose;

const musicianSchema = new Schema({
    nome: String,
    artname: String,
    età: Number,

})

const Musician = model("Musician", musicianSchema);

export default Musician;