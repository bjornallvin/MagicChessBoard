declare module "ts-chess-engine" {
  type BoardLocation =
    | "A1"
    | "A2"
    | "A3"
    | "A4"
    | "A5"
    | "A6"
    | "A7"
    | "A8"
    | "B1"
    | "B2"
    | "B3"
    | "B4"
    | "B5"
    | "B6"
    | "B7"
    | "B8"
    | "C1"
    | "C2"
    | "C3"
    | "C4"
    | "C5"
    | "C6"
    | "C7"
    | "C8"
    | "D1"
    | "D2"
    | "D3"
    | "D4"
    | "D5"
    | "D6"
    | "D7"
    | "D8"
    | "E1"
    | "E2"
    | "E3"
    | "E4"
    | "E5"
    | "E6"
    | "E7"
    | "E8"
    | "F1"
    | "F2"
    | "F3"
    | "F4"
    | "F5"
    | "F6"
    | "F7"
    | "F8"
    | "G1"
    | "G2"
    | "G3"
    | "G4"
    | "G5"
    | "G6"
    | "G7"
    | "G8"
    | "H1"
    | "H2"
    | "H3"
    | "H4"
    | "H5"
    | "H6"
    | "H7"
    | "H8";

  type Move = Record<BoardLocation, BoardLocation>;

  class Game {
    constructor(configuration?: BoardConfiguration);
    move(from: BoardLocation, to: BoardLocation): Move;
    aiMove(level: number): Move;
    printToConsole(): void;
    exportJson(): BoardConfiguration;
    moves(from: BoardLocation): BoardLocation[];
  }

  type Player = "white" | "black";
  type WhitePiece = "P" | "N" | "B" | "R" | "Q" | "K";
  type BlackPiece = "p" | "n" | "b" | "r" | "q" | "k";
  type Piece = WhitePiece | BlackPiece;

  interface BoardConfiguration {
    turn: Player;
    pieces: Record<BoardLocation, Piece>;
    moves: Record<BoardLocation, Array<BoardLocation>>;
    isFinished: boolean;
    check: boolean;
    checkMate: boolean;
    castling: Castling;
    enPassant: BoardLocation | null;
    halfMove: number;
    fullMove: number;
  }

  interface Castling {
    whiteLong: boolean;
    whiteShort: boolean;
    blackLong: boolean;
    blackShort: boolean;
  }
}
