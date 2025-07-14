import { CourseCard } from "@/pages/learning-area/CourseCard";

const LearningArea = () => {
  return (
    <div className="px-4 py-8">
      <h2 className="text-3xl font-bold mb-8 text-center">Learning Area</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center ml-10">
        {Array.from({ length: 9 }).map((_, index) => (
          <CourseCard
            key={index}
            title={`Course ${index + 1}`}
            courseDescription={`This is course ${index + 1}. A long detailed description to ensure the card stretches only vertically and wraps  ensure the card stretches only vertically and wraps ensure the card stretches only vertically and wraps ensure the card stretches only vertically and wraps ensure the card stretches only vertically and wraps ensure the card stretches only vertically and wraps ensure the card stretches only vertically and wraps ensure the card stretches only vertically and wraps ensure the card stretches only vertically and wraps ensure the card stretches only vertically and wraps  the text gracefully without clipping or overflow.`}
            courseLink=""
            quizLink=""
          />
        ))}
      </div>
    </div>
  );
};

export default LearningArea;
