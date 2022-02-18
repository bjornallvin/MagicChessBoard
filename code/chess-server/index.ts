import express, { Application, Request, Response } from "express";
import { resetGame } from "./game";
const router = require("./routes");

const app: Application = express();
const port = 4000;

// Body parsing Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", router);

try {
  app.listen(port, (): void => {
    console.log(`Connected successfully on port ${port}`);
    resetGame();
  });
} catch (error: any) {
  console.error(`Error occured: ${error.message}`);
}
