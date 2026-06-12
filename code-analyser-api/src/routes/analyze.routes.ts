import { Router } from "express";
import { analyze } from "../controllers/analyze.controller.js";
import {checkJwt} from "../middleware/auth.middleware.js";

const router = Router();

router.get("/", (_, res) => {
  res.json({
    message: "analyze route working",
  });
});


router.post("/", checkJwt, analyze);

export default router;