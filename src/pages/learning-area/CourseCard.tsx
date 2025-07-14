import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type CourseCardProps = {
  title: string;
  courseDescription: string;
  courseLink: string;
  quizLink: string;
};

export function CourseCard({
  title,
  courseDescription,
  courseLink,
  quizLink,
}: CourseCardProps) {
  return (
    <Card className="w-full max-w-sm bg-gray-100 transition-transform duration-300 hover:scale-105">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>

      <CardContent>
        <p className="text-sm text-gray-700 whitespace-pre-line break-words">
          {courseDescription}
        </p>
      </CardContent>

      <CardFooter className="flex gap-2">
        <Button className="flex-1 bg-green-500" asChild>
          <a href={courseLink} target="_blank" rel="noopener noreferrer">
            View Course
          </a>
        </Button>
        <Button  className="flex-1 bg-blue-400" asChild>
          <a href={quizLink} target="_blank" rel="noopener noreferrer">
            Start Quiz
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}
