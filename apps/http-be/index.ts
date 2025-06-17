import express from "express"
import type { Request, Response } from "express";
import { prismaClient } from "store/client"

const app = express();

app.use(express.json())

app.post("/website",async (req,res)=>{
    if(!req.body.url){
        res.status(411).json({})
        return;
    }
    
    const website = await prismaClient.website.create({
        data:{
            url:req.body.url,
            timeAdded:new Date()
        }
    })

    res.json({
        id: website.id
    })

})


// app.get("/", (req, res) => {
//     res.send("Hello World");
// }); 

// // app.use("/api/v1", router);


// app.get("/listen",(req:Request,res:Response)=>{

// })


// app.get("/website:websiteId",(req:Request,res:Response)=>{
    
// })



app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
