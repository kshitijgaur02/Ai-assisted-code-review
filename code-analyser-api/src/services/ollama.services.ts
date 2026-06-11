import axios from "axios";
import { analysisSchema } from "../constants/analysisSchema";

export async function analyzeWithOllama(
  prompt: string
) {
  const response = await axios.post(
    "http://localhost:11434/api/generate",
    {
      model: "qwen3:8b",
      prompt,
      stream: false,
      format: analysisSchema,
      options: {
        temperature: 0.2
      }
    }
  );

  return response.data.response;
}