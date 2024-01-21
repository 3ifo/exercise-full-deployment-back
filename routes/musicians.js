import express from "express"
import Musician from "../models/musicianModel.js";


const router = express.Router()
router.use(express.json())

router.get("/", async (req,res)=> {
    try {
        const musicians = await Musician.find();
        res.send(musicians)
    }catch (error){
        res.status(500).send(error.message)
    }
})

router.post("/", async (req,res)=> {
    try {  
        const newMusician = req.body;
        const musician = await Musician.create(newMusician);
        res.send(musician)
    }catch(error){
        res.status(404).send(error.message)
    }
})

router.get("/:id", async(req,res)=> {
    try {
        const {id}= req.params
        const musician = await Musician.findById(id)
        res.send(musician)
    }catch (error){
        res.status(404).send(error.message)
    }
})

router.put("/:id", async (req,res)=> {
    try {
        const {id}= req.params;
        await Musician.findByIdAndUpdate(id, req.body);
        const musician = await Musician.findById(id);
        res.send(musician)
    }catch (error){
        res.status(404).send(error.message);
    }
})

router.delete("/:id", async (req,res)=> {
    try {
        const {id} = req.params;
        await Musician.findByIdAndDelete(id);
        res.send(`Artista con ID ${id} eliminato correttamente.`)
    }catch (error){
        res.status(404).send(error.message)
    }
})

export default router;