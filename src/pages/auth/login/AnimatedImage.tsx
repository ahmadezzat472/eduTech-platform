const AnimatedImage = () => {
  return (
    <figure className="w-full flex justify-center items-center">
      <img
        className="w-full max-w-[200px] sm:max-w-[240px] md:max-w-[150px] h-auto object-contain mx-auto mb-2 animate-astronaut"
        style={{
          animation:
            "float-y 6s ease-in-out infinite reverse, astronaut-rotate 6s ease-in-out infinite reverse, scale-pulse 6s ease-in-out infinite",
          transform: "scale(0.8)",
        }}
        src="/images/auth/auth.png"
        alt="Astronaut"
      />
    </figure>
  );
};

export default AnimatedImage;
