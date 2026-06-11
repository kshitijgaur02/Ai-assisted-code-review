import { Request, Response } from "express";
import { buildAnalysisPrompt } from "../prompts/analysis.prompts";
import { analyzeWithOllama } from "../services/ollama.services";
import { parseModelResponse } from "../utils/parseModelResponse";
import { saveAnalysis } from "../services/analysis.service";

export async function analyze(req: Request, res: Response) {
  try {
    const { instruction, content } = req.body;

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

    const prompt = buildAnalysisPrompt(instruction, content);

    const rawResponse = await analyzeWithOllama(prompt);

    const result = parseModelResponse(rawResponse);

    await saveAnalysis(instruction, content, result);

    return res.json(result);
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      error: "Analysis failed. Please try again.",
    });
  }
}
