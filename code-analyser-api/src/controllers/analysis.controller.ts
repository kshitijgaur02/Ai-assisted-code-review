import { Request, Response }
  from "express";

import { prisma }
  from "../lib/prisma";

export const getAnalyses =
  async (
    req: Request,
    res: Response
  ) => {
    const sub =
      req.auth?.payload.sub;

    const analyses =
      await prisma.analysis.findMany({
        where: {
          userId: sub,
        },
        orderBy: {
          createdAt:
            "desc",
        },
      });

    res.json(
      analyses
    );
  };