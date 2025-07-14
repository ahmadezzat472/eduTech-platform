type BrandedLoaderProps = { className?: string };

function BrandedLoader({ className }: BrandedLoaderProps) {
  return (
    <div className={className}>
      <div
        dir="ltr"
        className="relative flex items-center justify-center h-32 w-32"
      >
        <svg
          className="animate-edu-loader"
          width="80"
          height="80"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Cap base */}
          <polygon points="32,8 60,20 32,32 4,20" fill="#0052CC" />
          {/* Cap top shine */}
          <polygon
            points="32,12 54,21 32,30 10,21"
            fill="#3385FF"
            opacity="0.3"
          />
          {/* Tassel */}
          <rect x="30" y="32" width="4" height="16" fill="#FFD700" />
          <circle cx="32" cy="48" r="3" fill="#FFD700" />
        </svg>
      </div>
    </div>
  );
}

export default BrandedLoader;
