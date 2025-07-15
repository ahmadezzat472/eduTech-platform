import { api } from "../api";
import type { QuizResponse } from "./types/QuizResponse";

export const getQuiz =
  ({ category, level }: { category: string; level: string }) =>
  async (): Promise<QuizResponse> => {
    const response = await api<QuizResponse>(
      `Quiz/GetQuiz?category=${category}&level=${level}`
    );

    return response;
  };
