import { Game } from "ts-chess-engine";

declare global {
  namespace NodeJS {
    interface Global {
      game: Game;
    }
  }
}
