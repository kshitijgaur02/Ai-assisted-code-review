import { Router } from "express";
import { analyze } from "../controllers/analyze.controller.js";

const router = Router();

router.get("/", (_, res) => {
  res.json({
    message: "analyze route working",
  });
});


router.post("/", analyze);

export default router;