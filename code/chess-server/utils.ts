import { BoardLocation, Move } from "ts-chess-engine";

export const moveFrom = (move: Move): BoardLocation => {
  const from: BoardLocation = Object.keys(move)[0] as BoardLocation;
  return from;
};
export const moveTo = (move: Move): BoardLocation => {
  const to: BoardLocation = Object.values(move)[0] as BoardLocation;
  return to;
};
