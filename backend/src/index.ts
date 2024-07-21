import express, { Express, Request, Response } from 'express';

const app: Express = express();
const port = process.env.PORT || 3000;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello from Fair Space API!');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});