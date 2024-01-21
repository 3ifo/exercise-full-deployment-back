import express from "express"
import Album from "../models/albumModel.js";



const router = express.Router()

router.use(express.json())

router.get("/", async (req,res)=> {
    try {
        const albums = await Album.find();
        res.send(albums)
    }catch (error){
        res.status(500).send(error.message)
    }
})

router.post("/", async (req,res)=> {
    try {  
        const newAlbum = req.body;
        const albums = await Album.create(newAlbum);
        res.send(albums)
    }catch(error){
        res.status(404).send(error.message)
    }
})

router.get("/:id", async(req,res)=> {
    try {
        const {id}= req.params
        const album = await Album.findById(id)
        res.send(album)
    }catch (error){
        res.status(404).send(error.message)
    }
})

router.put("/:id", async (req,res)=> {
    try {
        const {id}= req.params;
        await Album.findByIdAndUpdate(id, req.body);
        const album = await Album.findById(id);
        res.send(album)
    }catch (error){
        res.status(404).send(error.message);
    }
})

router.delete("/:id", async (req,res)=> {
    try {
        const {id} = req.params;
        await Album.findByIdAndDelete(id);
        res.send(`Album con ID ${id} eliminato correttamente.`)
    }catch (error){
        res.status(404).send(error.message)
    }
})

export default router;