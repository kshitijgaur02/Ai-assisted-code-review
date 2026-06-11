import axios from "axios";

async function test() {
  const response = await axios.post(
    "http://localhost:11434/api/generate",
    {
      model: "qwen3:8b",
      prompt: "Explain React in one sentence.",
      stream: false,
    }
  );

  console.log(response.data);
}

test();