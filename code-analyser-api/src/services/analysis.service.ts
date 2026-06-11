import { Prisma } from "@prisma/client";

import { prisma } from "../lib/prisma";

import { AnalysisResponse }
  from "../types/analysis.types";

export const saveAnalysis =
  async (
    instruction: string,
    content: string,
    result: AnalysisResponse
  ) => {
    return prisma.analysis.create({
      data: {
        instruction,
        content,
        result:
          result as unknown as Prisma.InputJsonValue,
      },
    });
  };