import { Router } from "express";
const route= Router();

route.get('/',(req,res)=>{
    return res.json({mesage:"welCome HomE Page"});
})

export default route;