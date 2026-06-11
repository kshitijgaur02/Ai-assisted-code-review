export function buildAnalysisPrompt(
  instruction: string,
  content: string
) {
  return `
You are an expert software engineer and code reviewer.

The user has provided technical content and a request.

User Request:
${instruction}

Content:
${content}

First determine whether the content is:

- source code
- configuration
- query language
- terminal command
- stack trace
- error message
- technical output

If the content is not technical, return ONLY:

{
  "error": "I couldn't detect any code, query, configuration, error message, or technical content to analyze."
}

Otherwise, analyze the content according to the user's request.

Return ONLY valid JSON in the following format:

{
  "explanation": "string",
  "issues": [
    {
      "title": "string",
      "severity": "low|medium|high"
    }
  ],
  "improvements": [
    {
      "title": "string",
      "explanation": "string",
      "snippet": "string"
    }
  ]
}

Rules:
- Return valid JSON only
- Do not return markdown
- Do not use code fences
- Do not explain your reasoning
- explanation should summarize the code and key findings
- issues should contain bugs, risks, anti-patterns, maintainability concerns, or code smells
- severity must be one of: low, medium, high
- improvements should contain actionable recommendations
- snippet should contain an example fix or improved code when applicable
- snippet may be an empty string if no example code is needed
- Prefer concise snippets focused on the specific improvement
- If no issues are found, return an empty issues array
- If no improvements are found, return an empty improvements array

Return JSON only.
`;
}