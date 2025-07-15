import { Trophy, CheckCircle } from "lucide-react";
import { ConfettiDemo } from "./ConfettiDemo";

interface FinalScreenProps {
  onRestart: () => void;
  score: number;
  totalQuestions: number;
  message: string;
  onGoToStart: () => void;
}
export default function FinalScreen({
  onRestart,
  score,
  totalQuestions,
  message,
  onGoToStart,
}: FinalScreenProps) {
  const percentage = Math.round((score / totalQuestions) * 100);
  const passThreshold = 70; // 70% to pass
  const passed = percentage >= passThreshold;
  return (
    <div className="p-8 text-center relative">
      {passed && (
        <div className="absolute inset-0 pointer-events-none z-0">
          <ConfettiDemo />
        </div>
      )}
      <div className="relative z-10">
        {passed ? (
          <CheckCircle className="w-16 h-16 mx-auto text-green-500 mb-4" />
        ) : (
          <Trophy className="w-16 h-16 mx-auto text-yellow-500 mb-4" />
        )}
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          {passed ? "Congratulations!" : "Game Over!"}
        </h2>
        <p className="text-lg text-gray-600">
          Final Score: {score}/{totalQuestions}
        </p>
        <p className="mt-2 text-gray-500">({percentage}% correct)</p>
        <p className="mt-4 text-base font-medium text-blue-700">{message}</p>
        <button
          onClick={onRestart}
          className="mt-6 inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
        >
          Play Again
        </button>
        <button
          onClick={onGoToStart}
          className="mt-3 ml-2 inline-flex items-center px-6 py-3 bg-gray-300 text-gray-800 font-semibold rounded-lg hover:bg-gray-400 transition-colors"
        >
          Go to Start Screen
        </button>
      </div>
    </div>
  );
}
