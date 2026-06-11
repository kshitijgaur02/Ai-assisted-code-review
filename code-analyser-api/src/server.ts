import express from "express";
import cors from "cors";

import analyzeRoutes from "./routes/analyze.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/health", (_, res) => {
  res.json({ status: "ok" });
});

app.use("/api/analyze", analyzeRoutes);

app.listen(4000, () => {
  console.log("Server running on 4000");
});