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
  videoUrl: string;
  levels: Level[];
};

export type Level = {
  id: string;
  name: string;
  description: string;
};
