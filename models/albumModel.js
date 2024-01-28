import mongoose from "mongoose"
const {Schema,SchemaTypes, model}= mongoose;

const albumSchema = new Schema({
    titolo: String,
    autore: {
        type: SchemaTypes.ObjectId,
        ref: "Musician"
    },
    anno: Number,
    durata: Number,
    
})

const Album = model("Album", albumSchema);

export default Album;
