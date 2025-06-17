import Router, { Request, Response } from "express"

const router = Router();

router.use("/user",userRouter)
router.use("/website", websiteRouter)

function userRouter(req:Request,res:Response){
    res.json({
        message:"reached user"
    })
}

function websiteRouter(req:Request,res:Response){
    res.json({
        message:"reached website"
    })
}

export default router;