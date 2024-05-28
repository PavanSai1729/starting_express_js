import express from "express";

const router = express.Router();

router.get("/", (req,res,next)=>{
    res.send("<h1>item selected</h1>");
});

export default router;