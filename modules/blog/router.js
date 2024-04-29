import { Router } from "express";
import * as blogController from './controller.js';
const route=Router();

route.get('/',blogController.getBlogs);
route.post('/add',blogController.addBlog)

export default route;