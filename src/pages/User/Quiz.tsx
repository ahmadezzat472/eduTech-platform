import { TableRow, TableCell } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

type QuizRowProps = {
    name: string;
    score: number;
    level: string;
};

const levelColor = (level: string) => {
switch (level.toLowerCase()) {
    case "beginner":
        return "bg-green-100 text-green-700";
    case "intermediate":
        return "bg-yellow-100 text-yellow-800";
    case "advanced":
        return "bg-red-100 text-red-700";
    default:
        return "bg-gray-100 text-gray-800";
}
};

export const Quiz = ({ name, score, level }: QuizRowProps) => {
    return (
        <TableRow>
        <TableCell className="font-medium">{name}</TableCell>
        <TableCell>
            <span
            className={`text-sm font-medium px-2 py-1 rounded ${levelColor(
                level
            )}`}
            >
            {level}
            </span>
        </TableCell>
        <TableCell className="text-right">
            <Badge variant="secondary">{score} / 100</Badge>
        </TableCell>
        </TableRow>
    );
};
