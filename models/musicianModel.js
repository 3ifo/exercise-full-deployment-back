import mongoose from "mongoose"
const {Schema,SchemaTypes, model}= mongoose;

const musicianSchema = new Schema({
    nome: String,
    fullname: String,
    artname: String,
    età: Number,
    album: {
        type: SchemaTypes.ObjectId,
        ref: "Album"
    }

})

const Musician = model("Musician", musicianSchema);

export default Musician;