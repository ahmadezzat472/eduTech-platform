const AnimatedCircle = () => {
  return (
    <div className="absolute inset-0 z-0">
      {/* Large planet */}
      <div
        className="absolute -right-20 top-20 w-64 h-64 rounded-full bg-gradient-to-br from-orange-400 to-red-600 opacity-30 blur-sm animate-float-y rotate-360"
        style={{
          animation:
            "float-y 6s ease-in-out infinite reverse, rotate-360 20s linear infinite",
        }}
      />

      {/* Small planet */}
      <div
        className="absolute left-20 bottom-32 w-24 h-24 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 opacity-40 blur-sm animate-float-xy"
        style={{ animation: "float-xy 8s ease-in-out infinite reverse" }}
      />

      {/* Medium planet with ring */}
      <div
        className="absolute left-[15%] top-1/4 w-40 h-40 animate-scale-rotate"
        style={{
          animation:
            "scale 10s ease-in-out infinite reverse, rotate-360 30s linear infinite",
        }}
      >
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-teal-400 to-emerald-600 opacity-30 blur-sm"></div>
        <div className="absolute inset-0 -rotate-45 scale-110">
          <div className="w-full h-6 bg-gradient-to-r from-purple-400/30 to-transparent blur-sm"></div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedCircle;
