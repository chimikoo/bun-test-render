import express from 'express';
import { type Response } from 'express';

const app = express();
const port = 8080;

interface HelloResponse {
  message: string; 
}

app.get("/", (req, res: Response<HelloResponse>) => {
  res.json({ message: "Hello from Bun & Express, using Docker!" });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});