import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import { Button } from "../ui/button";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 120) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Button
      onClick={scrollToTop}
      variant={"secondary"}
      size={"icon"}
      className={`fixed bottom-6 z-50 bg-primary shadow-lg transition-all duration-700 ${
        isVisible
          ? "left-[84%] sm:left-[90%] md:left-[93%] lg:left-[95%]"
          : "left-full"
      }`}
    >
      <FaArrowUp />
    </Button>
  );
};

export default ScrollToTop;
