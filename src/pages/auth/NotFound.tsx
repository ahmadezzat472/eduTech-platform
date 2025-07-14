import { Button } from "@/components/ui/button";
import { FaExclamationTriangle } from "react-icons/fa";
import { useNavigate } from "react-router";

const NotFound = () => {
  const navigate = useNavigate();

  const goHome = () => navigate("/");
  const goBack = () => navigate(-1);

  return (
    <div className="fixed inset-0 bg-gray-900">
      {/* Warning lights effect */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="warning-light-yellow"></div>
          <div className="warning-light-blue"></div>
        </div>
      </div>

      {/* Security pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="security-pattern"></div>
      </div>

      <div className="relative h-full flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-[400px] text-center transition-all duration-500 ease-out opacity-0 scale-80 animate-fade-scale">
          {/* Not Found Icon */}
          <div className="mb-8">
            <div className="relative ">
              <div
                className="absolute inset-0 blur-xl bg-yellow-500/20 rounded-full animate-pulse-opacity"
                style={{
                  animation: "pulse-opacity 2s ease-in-out infinite reverse",
                }}
              />
              <FaExclamationTriangle className="w-24 h-24 mx-auto text-yellow-400 animate-pulse-scale-rotate" />
            </div>
          </div>

          {/* Content container */}
          <div className="space-y-6 transition-all duration-500 ease-out opacity-0 translate-y-[20px] animate-fade-in-delay">
            {/* Error number */}
            <div
              className="flex items-center justify-center gap-4 animate-pulse-scale"
              style={{
                animation: "pulse-scale 2s ease-in-out infinite reverse",
              }}
            >
              <div className="w-6 h-6 rounded-full bg-yellow-400 animate-pulse"></div>
              <span className="font-bold text-4xl sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400">
                404
              </span>
              <div className="w-6 h-6 rounded-full bg-yellow-400 animate-pulse"></div>
            </div>

            {/* Error text */}
            <div className="space-y-4">
              <h1
                className="text-xl sm:text-2xl font-bold text-white tracking-wider uppercase whitespace-nowrap animate-pulse-opacity"
                style={{
                  animation: "pulse-opacity 2s ease-in-out infinite reverse",
                }}
              >
                Page Not Found
              </h1>

              <div className="p-4 border-2 border-yellow-500/30 rounded-lg bg-gray-900/50 backdrop-blur-sm">
                <p className="text-sm sm:text-base text-gray-300 font-medium">
                  ⚠️ Sorry, the page you are looking for doesn't exist. <br />
                  It might have been moved or deleted.
                </p>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={goHome}
                size={"lg"}
                className="bg-gradient-to-r from-blue-900 to-blue-500 hover:from-blue-950 hover:to-blue-600 h-12 font-semibold default-transition"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
                Home
              </Button>

              <Button
                onClick={goBack}
                variant={"secondary"}
                className="bg-gray-800 h-12 font-semibold"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                Go Back
              </Button>
            </div>

            {/* Support Link */}
            <p className="text-sm text-gray-400">
              Still lost?{" "}
              <a
                href="mailto:support@example.com"
                className="text-yellow-400 hover:text-yellow-300 underline"
              >
                Contact Support
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
