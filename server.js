import express from "express";
import cors from "cors";

const server = express();

server.use(cors());

server.get("/", (req, res) => {
  return res.json([
    ["--primary", "#0000ff"],
    ["--secondary", "#c2c2c2"],
    ["--rounded", "10rem"],
  ]);
});

server.listen(3000, () => console.log("Yooooooo"));
