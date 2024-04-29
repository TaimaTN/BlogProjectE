import { Router } from "express";
import * as authController from "./controller.js"
const router=Router();

router.get('/',authController.getAuth);
router.post('/registor',authController.registor);
router.post('/signin',authController.login);

export default router;