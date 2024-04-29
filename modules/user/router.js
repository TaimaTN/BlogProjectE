import { Router } from "express";
import * as userController from './controller.js'

const route = Router();

route.get('/',userController.getUsers);
route.get("/gt20/:age",userController.usersGT20);
route.patch('/update/:id',userController.update)
route.delete('/delete/:id',userController.destroy);
export default route;