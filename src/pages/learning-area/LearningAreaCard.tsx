import { DirectionAwareHoverCard } from "@/components/common/DirectionAwareHoverCard";
import { HiArrowSmRight } from "react-icons/hi";
import { Link } from "react-router";

interface Props {
  image: string;
  name: string;
  description?: string;
}

const LearningAreaCard = ({ name, description, image }: Props) => {
  return (
    <Link
      to={`/learning-area/${name.toLowerCase().replace(/\s+/g, "-")}`}
      className="group overflow-hidden"
    >
      <DirectionAwareHoverCard
        imageUrl={image}
        isDark={true}
        className="h-[300px]"
      />

      <div className="px-4 py-3 bg-gray-50 rounded-b-xl shadow-md group-hover:shadow-lg max-w-full ">
        <div className="flex items-center justify-between gap-2 text-secondary-600 group-hover:text-primary-600 font-bold">
          <p className="truncate text-xl">{name}</p>
          <HiArrowSmRight
            size={20}
            className="min-w-fit opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-transform duration-300"
          />
        </div>
        <p className="text-gray-700 text-[15px] line-clamp-2 mt-2">
          {description}
        </p>
      </div>
    </Link>
  );
};

export default LearningAreaCard;
