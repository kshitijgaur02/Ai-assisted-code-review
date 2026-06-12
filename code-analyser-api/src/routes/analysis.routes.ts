import { Router } from "express";
import {getAnalyses} from "../controllers/analysis.controller.js";
import {checkJwt} from "../middleware/auth.middleware.js";


const router = Router();

router.get("/", checkJwt,getAnalyses);

export default router;