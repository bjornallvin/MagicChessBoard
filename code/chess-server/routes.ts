import express, { Application, Request, Response } from "express";
const router = express.Router();
import { resetGame } from "./game";

router
  .route("/")
  .get(async (req: Request, res: Response): Promise<Response> => {
    resetGame();
    return res.status(200).send({
      message: "Hello World!",
    });
  });

module.exports = router;
