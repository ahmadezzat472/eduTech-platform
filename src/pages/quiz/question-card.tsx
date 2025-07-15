import type { Question } from "@/types/quiz";
import { CheckCircle, XCircle } from "lucide-react";

interface QuestionCardProps {
  question: Question;
  selectedAnswer: number | null;
  onAnswerSelect: (index: number) => void;
  totalQuestions: number;
  currentQuestion: number;
}
export default function QuestionCard({
  question,
  selectedAnswer,
  onAnswerSelect,
  totalQuestions,
  currentQuestion,
}: QuestionCardProps) {
  const getButtonClass = (index: number): string => {
    if (selectedAnswer === null) return "hover:bg-gray-100";
    const selectedOption = question.options[selectedAnswer!];
    if (question.options[index] === question.correctAnswer)
      return "bg-green-100 border-green-500";
    if (selectedAnswer === index && selectedOption !== question.correctAnswer)
      return "bg-red-100 border-red-500";
    return "opacity-50";
  };

  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-800 mb-2">
        Question {currentQuestion + 1} of {totalQuestions}
      </h2>
      <p className="text-gray-600 mb-4">{question.theQuestion}</p>

      <div className="space-y-3">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => selectedAnswer === null && onAnswerSelect(index)}
            className={`w-full p-4 text-left border rounded-lg transition-all duration-300 ${getButtonClass(
              index
            )}`}
          >
            <div className="flex items-center justify-between">
              <span>{option}</span>
              {selectedAnswer !== null && option === question.correctAnswer && (
                <CheckCircle className="w-5 h-5 text-green-500" />
              )}
              {selectedAnswer !== null &&
                selectedAnswer === index &&
                option !== question.correctAnswer && (
                  <XCircle className="w-5 h-5 text-red-500" />
                )}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
