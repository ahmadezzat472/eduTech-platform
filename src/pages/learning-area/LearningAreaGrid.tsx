import { courses } from "@/data/courses";
import LearningAreaCard from "./LearningAreaCard";

const LearningAreaGrid = () => {
  return (
    <ul className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-start gap-4">
      {courses.map((course) => (
        <LearningAreaCard
          key={course.id}
          id={course.id}
          image={course.image}
          name={course.name}
          description={course.description}
        />
      ))}
    </ul>
  );
};

export default LearningAreaGrid;
