export async function analyze(
  instruction: string,
  content: string
) {
  const response =
    await fetch(
      "http://localhost:4000/api/analyze",
      {
        method: "POST",

        headers: {
          "Content-Type":
            "application/json",
        },

        body: JSON.stringify(
          {
            instruction,
            content,
          }
        ),
      }
    );

  return response.json();
}