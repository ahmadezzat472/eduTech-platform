import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Quiz } from "./Quiz";
import { useQuery } from "@tanstack/react-query";
import { getTokenQuiz } from "@/services/quiz/getTokenQuiz";
import Main from "@/components/common/Main";

const UserQuizzes = () => {
  const {
    data: quizScores,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["userQuizScores"],
    queryFn: getTokenQuiz,
  });

  if (isLoading)
    return (
      <div className="flex items-center justify-center h-[80vh]">
        <div className="size-15 animate-spin rounded-full border-4 border-blue-600 border-t-transparent mx-auto" />
      </div>
    );
  if (isError)
    return (
      <div className="text-center text-2xl font-bold text-red-500 flex items-center justify-center h-[50vh]">
        Error loading quiz.
      </div>
    );
  if (!quizScores)
    return (
      <div className="text-center text-2xl font-bold">No quiz data found.</div>
    );

  return (
    <Main>
      <Card className="max-w-5xl mx-auto my-10" id="user-quizzes">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">
            Your Completed Quizzes
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-1/2">Quiz Name</TableHead>
                <TableHead>Level</TableHead>
                <TableHead className="text-right">Score</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {quizScores?.map((quiz) => (
                <Quiz
                  key={quiz.category + quiz.level}
                  name={quiz.category.split("-").join(" ").toUpperCase()}
                  score={quiz.score}
                  level={quiz.level}
                />
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </Main>
  );
};

export default UserQuizzes;
