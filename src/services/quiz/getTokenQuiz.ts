import { api } from "../api";
import type { TokenQuizResponse } from "./types/TokenQuizResponse";

export const getTokenQuiz = async (): Promise<TokenQuizResponse> => {
  const response = await api<TokenQuizResponse>(`UserQuiz/TakenQuizzes`);

  return response;
};
