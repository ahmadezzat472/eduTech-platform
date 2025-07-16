import { api } from "@/services/api";

type AddQuizScoreParams = {
  quizId: string;
  score: number;
};

export const addQuizScore = async ({ quizId, score }: AddQuizScoreParams) => {
  const response = await api<unknown>(`UserQuiz/AddTakenQuiz`, {
    method: "POST",
    body: JSON.stringify({
      quizId: quizId,
      score: score,
    }),
  });
  return response;
};
