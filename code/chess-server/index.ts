import express, { Application, Request, Response } from "express";

const app: Application = express();
const port = 4000;

const jsChessEngine = require("js-chess-engine");
const game = new jsChessEngine.Game();

// Body parsing Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", async (req: Request, res: Response): Promise<Response> => {
  return res.status(200).send({
    message: "Hello World!",
  });
});

try {
  app.listen(port, (): void => {
    console.log(`Connected successfully on port ${port}`);
  });

  game.printToConsole();
  console.log(game.aiMove(1));
  game.printToConsole();
  console.log(game.move("e2", "e4"));
  game.printToConsole();
} catch (error: any) {
  console.error(`Error occured: ${error.message}`);
}
