import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useApiQuery } from "@/hooks/useApiQuery";
import { getQuiz } from "@/services/quiz/getQuiz";
import StartScreen from "./start-screen";
import QuestionCard from "./question-card";
import FinalScreen from "./FinalScreen";
import type { GameState, Question } from "@/types/quiz";
import Timer from "./timer";
import { AnimatedCircularProgressBar } from "@/components/magicui/animated-circular-progress-bar";
import { useApiMutation } from "@/hooks/useApiMutation";
import { addQuizScore } from "@/services/quiz/addQuizScore";
import { toast } from "sonner";

const DEFAULT_TIME = 30;

const Quiz = () => {
  const { chapterName, quizType } = useParams();
  const category = chapterName; // or adjust as needed
  const level = quizType; // or adjust as needed

  const {
    data: quizData,
    isLoading,
    isError,
  } = useApiQuery(
    ["quiz", category, level],
    getQuiz({ category: category || "", level: level || "" }),
    {
      enabled: !!category && !!level,
    }
  );

  const QUESTIONS: Question[] = Array.isArray(quizData?.questions)
    ? quizData.questions
    : [];

  const [gameState, setGameState] = useState<GameState>("start");
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [timeLeft, setTimeLeft] = useState<number>(DEFAULT_TIME);
  const [countdown, setCountdown] = useState<number>(DEFAULT_TIME);
  const [useTimer, setUseTimer] = useState(true);

  const { mutate: saveQuizScore } = useApiMutation({
    mutationFn: addQuizScore,
    onSuccess: () => {
      // Optionally show a toast or message
      toast.success("Score saved!");
    },
    onError: (error) => {
      // Optionally show a toast or message
      toast.error(error.message || "Failed to save score");
    },
  });

  useEffect(() => {
    let timer: number;
    if (gameState === "playing" && useTimer && timeLeft > 0) {
      timer = window.setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (useTimer && timeLeft === 0 && gameState === "playing") {
      setGameState("end");
    }
    return () => window.clearInterval(timer);
  }, [timeLeft, gameState, useTimer]);

  useEffect(() => {
    if (gameState === "end" && quizData?.id) {
      saveQuizScore({ quizId: quizData.id, score });
    }
  }, [gameState, quizData?.id, score, saveQuizScore]);

  const handleStart = (selectedTime?: number, timerEnabled?: boolean) => {
    setGameState("playing");
    setTimeLeft(selectedTime || countdown);
    setCountdown(selectedTime || countdown);
    setScore(0);
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setUseTimer(timerEnabled !== undefined ? timerEnabled : true);
  };

  const handleAnswer = (index: number): void => {
    setSelectedAnswer(index);
    const selectedOption = QUESTIONS[currentQuestion].options[index];
    const isCorrect =
      selectedOption === QUESTIONS[currentQuestion].correctAnswer;

    if (isCorrect) {
      setScore((prev) => prev + 1);
    }

    setTimeout(() => {
      if (currentQuestion < QUESTIONS.length - 1) {
        setCurrentQuestion((prev) => prev + 1);
        setSelectedAnswer(null);
      } else {
        setGameState("end");
      }
    }, 1500);
  };

  // Handle loading and error states
  if (isLoading) return <div>Loading quiz...</div>;
  if (isError) return <div>Error loading quiz.</div>;
  if (!quizData) return <div>No quiz data found.</div>;
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        {gameState === "start" && (
          <StartScreen
            onStart={handleStart}
            countdown={countdown}
            setCountdown={setCountdown}
          />
        )}
        {gameState === "playing" && (
          <div className="p-8">
            <div className="flex items-center justify-center">
              <button
                onClick={() => setGameState("start")}
                className="mb-4 px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition-colors"
              >
                Return to Start Screen
              </button>
            </div>
            {useTimer && <Timer timeLeft={timeLeft} />}
            <QuestionCard
              question={QUESTIONS[currentQuestion]}
              onAnswerSelect={handleAnswer}
              selectedAnswer={selectedAnswer}
              totalQuestions={QUESTIONS.length}
              currentQuestion={currentQuestion}
            />

            <AnimatedCircularProgressBar
              max={QUESTIONS.length}
              min={0}
              value={score}
              gaugePrimaryColor="#22c55e" // Tailwind green-500
              gaugeSecondaryColor="#e5e7eb" // Tailwind gray-200
              className="mx-auto mt-6 size-20"
            />
            {/* You may remove the text score below if you only want the progress bar */}
            <div className="mt-6 text-center text-gray-600">
              Score: {score}/{QUESTIONS.length}
            </div>
          </div>
        )}
        {gameState === "end" && (
          <FinalScreen
            score={score}
            totalQuestions={QUESTIONS.length}
            onRestart={() => handleStart(countdown)}
            message={
              score / QUESTIONS.length < 0.5
                ? "You need to study more."
                : "Great job! You studied well."
            }
            onGoToStart={() => setGameState("start")}
          />
        )}
      </div>
    </div>
  );
};

export default Quiz;
