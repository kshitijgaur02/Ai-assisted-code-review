import { Router } from "express";

import { checkJwt } from "../middleware/auth.middleware";

const router = Router();

router.get(
  "/me",
  checkJwt,
  (req, res) => {
    const payload =
      req.auth?.payload;

    res.json({
      sub:
        payload?.sub,
    });
  }
);

export default router;