import { Trophy } from "lucide-react";

interface GameOverProps {
  onRestart: () => void;
  score: number;
  totalQuestions: number;
  message: string;
  onGoToStart: () => void;
}
export default function GameOver({
  onRestart,
  score,
  totalQuestions,
  message,
  onGoToStart,
}: GameOverProps) {
  const percentage = Math.round((score / totalQuestions) * 100);
  return (
    <div className="p-8 text-center">
      <Trophy className="w-16 h-16 mx-auto text-yellow-500 mb-4" />
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Game Over!</h2>
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
  );
}
