export type Course = {
  id: string;
  name: string;
  description: string;
  image: string;
  chapters: Chapter[];
};

export type Chapter = {
  id: string;
  name: string;
  description: string;
  whatYouWillLearn: string[];
  videoUrl: string;
  quizLevels: quizLevels[];
};

export type quizLevels = {
  id: string;
  name: string;
  type: "beginner" | "intermediate" | "advanced";
  description: string;
};
