import { Link, useParams } from "react-router-dom";
import { courses } from "@/data/courses";
import { Timeline } from "@/components/ui/timeline";
import VideoDialog from "./VideoDialog";
import { userScores } from "@/data/userScore";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import BackgroundBoxes from "@/components/common/BackgroundBoxes";

export default function Course() {
  const { courseId } = useParams();
  const course = courses.find((c) => c.id === courseId);

  const data = course
    ? course.chapters.map((chapter) => ({
        title: chapter.name,
        content: (
          <div>
            <p className="mb-4 text-xs text-neutral-800 md:text-sm font-bold dark:text-neutral-200">
              {chapter.description}
            </p>
            <div className="mb-8">
              {chapter.whatYouWillLearn.map((item) => (
                <div className="flex font-semibold items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
                  ✅ {item}
                </div>
              ))}
            </div>
            <VideoDialog videoUrl={chapter.videoUrl} />
            <h2 className="text-lg font-semibold text-neutral-700 md:text-2xl dark:text-neutral-300 mt-10">
              Quizzes
            </h2>
            <div className="mt-4 grid grid-cols-1 lg:grid-cols-2 gap-4">
              {chapter.quizLevels.map((level) => {
                // Find the user's score for this quiz level
                const userScore = userScores.find(
                  (score) =>
                    score.courseId === course?.id &&
                    score.chapterId === chapter.id &&
                    score.quizLevelId === level.id
                );
                return (
                  <div
                    className="flex flex-col gap-2 p-3 border rounded-md bg-neutral-50 dark:bg-neutral-800"
                    key={level.id}
                  >
                    <div className="flex items-center gap-2">
                      <p className="font-bold text-neutral-700 md:text-sm dark:text-neutral-300">
                        {level.name}
                      </p>
                    </div>
                    <p className="text-xs text-neutral-600 dark:text-neutral-400 mb-1">
                      {level.description}
                    </p>
                    <div className="flex items-center gap-2.5">
                      <span className="text-xs text-blue-600 dark:text-blue-300">
                        <Badge variant="outline">
                          Score: {userScore ? userScore.score : "-"}
                        </Badge>
                      </span>
                      <Badge variant="secondary">{level.type}</Badge>
                    </div>
                    <Link
                      to={`/learning-area/${course?.id}/quiz/${level.type}`}
                      className="w-full inline-block"
                    >
                      <Button size={"sm"} className="mt-4 h-6 w-full">
                        Start Quiz
                      </Button>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        ),
      }))
    : [];

  return (
    <div className="relative w-full overflow-clip">
      <BackgroundBoxes
        title="Learn to code with ease"
        description="Learn to code with ease and start your journey to becoming a developer"
      />
      <Timeline
        data={data}
        title={course?.name ?? ""}
        description={course?.description ?? ""}
      />
    </div>
  );
}
