import { Request, Response } from "express";
import { buildAnalysisPrompt } from "../prompts/analysis.prompts";
import { analyzeWithOllama } from "../services/ollama.services";
import { parseModelResponse } from "../utils/parseModelResponse";
import { saveAnalysis } from "../services/analysis.service";
import { getOrCreateUser } from "../services/auth.services";

export async function analyze(req: Request, res: Response) {
  try {
    const { instruction, content, email } = req.body;

    if (!instruction?.trim()) {
      return res.status(400).json({
        error: "Instruction is required.",
      });
    }

    if (!content?.trim()) {
      return res.status(400).json({
        error: "Content is required.",
      });
    }

    const sub =
      req.auth?.payload.sub;

    if (!sub) {
      return res.status(401).json({
        error:
          "Unauthorized",
      });
    }

    const user =
      await getOrCreateUser(
        sub,
        email
      );

    const prompt = buildAnalysisPrompt(instruction, content);

    const rawResponse = await analyzeWithOllama(prompt);

    const result = parseModelResponse(rawResponse);

    await saveAnalysis(user.id, instruction, content, result);

    return res.json(result);
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      error: "Analysis failed. Please try again.",
    });
  }
}
