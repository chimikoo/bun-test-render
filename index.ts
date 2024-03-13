import express from 'express';
import type { Request, Response } from 'express';

const app = express();
const port = 8080;

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

interface HelloResponse {
  message: string; 
}

app.get("/", (req: Request, res: Response<HelloResponse>) => {
  res.json({ message: "Hello from Bun & Express, using Docker!" });
});


app.listen(port, () => {
  if (process.env.NODE_ENV !== 'production') {
    console.log(`Listening on port ${port}...`);
  }
});