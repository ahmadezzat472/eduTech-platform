export type QuizResponse = {
  id: string;
  questions: {
    id: string;
    theQuestion: string;
    correctAnswer: string;
    options: string[];
  };
  level: string;
  category: string;
};
