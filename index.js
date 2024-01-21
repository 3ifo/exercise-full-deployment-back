import express from "express";
import morgan from "morgan"
import mongoose from "mongoose";
import albumsRouter from "./routes/albums.js"
import musiciansRouter from "./routes/musicians.js"
import Album from "./models/albumModel.js";
import Musician from "./models/musicianModel.js"
import cors from "cors"
import dotenv from "dotenv"
dotenv.config()
const MONGO_URI = process.env.MONGO_URI
mongoose.connect(MONGO_URI)
const app = express()
app.use(morgan("dev"))
app.use(cors({origin: "*"}))
app.use(express.json())

app.listen(3000, () => {
    console.log("Server in ascolto sulla porta 3000")
})

app.use("/albums", albumsRouter)
app.use("/musicians", musiciansRouter)

export default app