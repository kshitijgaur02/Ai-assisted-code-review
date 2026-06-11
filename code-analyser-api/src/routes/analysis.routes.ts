import { Router } from "express";
import {getAnalyses} from "../controllers/analysis.controller.js";

const router = Router();

router.get("/", getAnalyses);

export default router;