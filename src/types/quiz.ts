export type GameState = "start" | "playing" | "end";

export interface Question {
  id: string;
  theQuestion: string;
  correctAnswer: string;
  options: string[];
}
