import express, { Request, Response } from "express";
import router from "./routes";

const app = express();

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.use("/api/v1", router);


app.get("/listen",(req:Request,res:Response)=>{

})


app.get("/website:websiteId",(req:Request,res:Response)=>{
    
})



app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
