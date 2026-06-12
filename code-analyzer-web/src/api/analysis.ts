export async function analyze(
  instruction: string,
  content: string,
  token: string,
  email: string
) {
  const response = await fetch("http://localhost:4000/api/analyze", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",

      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      instruction,
      content,
      email
    }),
  });

  return response.json();
}
