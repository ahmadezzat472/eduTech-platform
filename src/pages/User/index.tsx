import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Quiz } from "./Quiz"; // adjust the path if needed

const userQuizzes = [
  { id: 1, name: "Introduction to HTML", score: 100, level: "Beginner" },
  { id: 2, name: "CSS Basics", score: 85, level: "Beginner" },
  { id: 3, name: "JavaScript Fundamentals", score: 90, level: "Intermediate" },
  { id: 4, name: "React Components", score: 75, level: "Intermediate" },
  { id: 5, name: "Introduction to HTML", score: 100, level: "Advanced" },
  { id: 6, name: "CSS Basics", score: 85, level: "Beginner" },
  { id: 7, name: "JavaScript Fundamentals", score: 90, level: "Intermediate" },
  { id: 8, name: "React Components", score: 75, level: "Intermediate" },
];

const index = () => {
  return (
    <Card className="max-w-5xl mx-auto my-10" id="user-quizzes">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Your Completed Quizzes</CardTitle>
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
            {userQuizzes.map((quiz) => (
              <Quiz
                key={quiz.id}
                name={quiz.name}
                score={quiz.score}
                level={quiz.level}
              />
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default index;
