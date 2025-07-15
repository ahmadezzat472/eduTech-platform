import { useState } from "react";
import { Play } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

interface StartScreenProps {
  onStart: (selectedTime?: number, useTimer?: boolean) => void;
  countdown: number;
  setCountdown: (time: number) => void;
}
export default function StartScreen({
  onStart,
  countdown,
  setCountdown,
}: StartScreenProps) {
  const [useTimer, setUseTimer] = useState(true);

  return (
    <div className="text-center p-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">
        Coding Quiz Game
      </h1>
      <p className="text-gray-600 mb-8">Test your programming knowledge!</p>
      <div className="mb-6 flex items-center justify-center gap-4">
        <span className="text-gray-700 font-medium">Enable Timer</span>
        <Switch checked={useTimer} onCheckedChange={setUseTimer} />
      </div>
      {useTimer && (
        <div className="mb-6 flex items-center justify-center flex-col">
          <label
            htmlFor="countdown"
            className="block mb-2 text-gray-700 font-medium"
          >
            Select Countdown Time:
          </label>
          <Select
            value={String(countdown)}
            onValueChange={(val) => setCountdown(Number(val))}
          >
            <SelectTrigger className="w-40">
              <SelectValue placeholder="Select time" />
            </SelectTrigger>
            <SelectContent className="mx-auto">
              <SelectItem value="30">30 seconds</SelectItem>
              <SelectItem value="60">60 seconds</SelectItem>
              <SelectItem value="90">90 seconds</SelectItem>
              <SelectItem value="120">120 seconds</SelectItem>
              <SelectItem value="150">150 seconds</SelectItem>
              <SelectItem value="180">180 seconds</SelectItem>
              <SelectItem value="210">210 seconds</SelectItem>
              <SelectItem value="240">240 seconds</SelectItem>
              <SelectItem value="270">270 seconds</SelectItem>
            </SelectContent>
          </Select>
        </div>
      )}
      <button
        onClick={() => onStart(countdown, useTimer)}
        className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
      >
        <Play className="w-5 h-5 mr-2" />
        Start Quiz
      </button>
    </div>
  );
}
