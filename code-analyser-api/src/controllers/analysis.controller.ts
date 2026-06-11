import { Request, Response }
  from "express";

import { prisma }
  from "../lib/prisma";

export const getAnalyses =
  async (
    req: Request,
    res: Response
  ) => {
    try {
      const analyses =
        await prisma.analysis.findMany({
          orderBy: {
            createdAt: "desc",
          },
        });

      return res.json(
        analyses
      );

    } catch (error) {
      console.error(error);

      return res.status(500).json({
        error:
          "Failed to fetch analyses",
      });
    }
  };