import express from 'express';

const app = express();
const port = 8080;

interface HelloResponse {
  message: string;
}

app.get("/", (req, res: express.Response<HelloResponse>) => {
  res.json({ message: "Hello from Bun & Express, using Docker!" });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});