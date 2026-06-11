export function parseModelResponse(
  response: string
) {
  try {
    return JSON.parse(
      response
    );
  } catch (error) {
    console.error(
      "Failed to parse model response"
    );

    console.error(response);

    throw new Error(
      "Invalid model response"
    );
  }
}