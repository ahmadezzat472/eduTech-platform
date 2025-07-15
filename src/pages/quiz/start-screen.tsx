import { Play } from "lucide-react";

interface StartScreenProps {
  onStart: (selectedTime?: number) => void;
  countdown: number;
  setCountdown: (time: number) => void;
}
export default function StartScreen({
  onStart,
  countdown,
  setCountdown,
}: StartScreenProps) {
  return (
    <div className="text-center p-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">
        Coding Quiz Game
      </h1>
      <p className="text-gray-600 mb-8">Test your programming knowledge!</p>
      <div className="mb-6">
        <label
          htmlFor="countdown"
          className="block mb-2 text-gray-700 font-medium"
        >
          Select Countdown Time:
        </label>
        <select
          id="countdown"
          value={countdown}
          onChange={(e) => setCountdown(Number(e.target.value))}
          className="p-2 border rounded-lg"
        >
          <option value={10}>10 seconds</option>
          <option value={20}>20 seconds</option>
          <option value={30}>30 seconds</option>
          <option value={60}>60 seconds</option>
        </select>
      </div>
      <button
        onClick={() => onStart(countdown)}
        className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
      >
        <Play className="w-5 h-5 mr-2" />
        Start Quiz
      </button>
    </div>
  );
}
