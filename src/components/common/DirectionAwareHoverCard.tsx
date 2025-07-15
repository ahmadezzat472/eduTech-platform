import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";

interface DirectionAwareHoverCard {
  imageUrl: string;
  title?: string;
  description?: string;
  isDark?: boolean;
  className?: string;
  staticTextInvariant?: boolean;
}

export function DirectionAwareHoverCard({
  imageUrl,
  title,
  description,
  isDark,
  className,
  staticTextInvariant,
}: DirectionAwareHoverCard) {
  return (
    <div className="relative flex items-center justify-center">
      <DirectionAwareHover
        imageUrl={imageUrl}
        isDark={isDark}
        className={className}
        staticTextInvariant={staticTextInvariant}
      >
        <p className="font-bold text-xl">{title}</p>
        <p className="font-normal text-sm">{description}</p>
      </DirectionAwareHover>
    </div>
  );
}
