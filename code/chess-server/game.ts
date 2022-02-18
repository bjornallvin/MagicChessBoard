import { BoardLocation, Game, Move } from "ts-chess-engine";
const jsChessEngine = require("js-chess-engine");

let game = new jsChessEngine.Game();

export const resetGame = () => {
  game = new jsChessEngine.Game();
  const m: { [K in BoardLocation]?: BoardLocation } = { A1: "A2" };
  //game.printToConsole();
  //console.log(game.aiMove(1));
  console.log(Object.keys(m)[0] as BoardLocation);
  game.move("A2", "A3");
  game.move("A7", "A6");
  game.printToConsole();
  console.log(game.moves("A3"));
  console.log(game.aiMove(1));
  //game.printToConsole();
  //console.log(game.exportJson());
};
