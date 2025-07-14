import { Button } from "@/components/ui/button";
import { FaServer } from "react-icons/fa";
import { useNavigate } from "react-router";

interface Props {
  statusCode?: number;
  title?: string;
}

const RoutingError = ({ statusCode = 500, title = "Server Error" }: Props) => {
  const navigate = useNavigate();

  const goHome = () => navigate("/");
  const refreshPage = () => window.location.reload();
  const goBack = () => navigate(-1);

  return (
    <div className="fixed inset-0 bg-gray-900">
      {/* Warning lights effect */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="warning-light-red"></div>
          <div className="warning-light-blue"></div>
        </div>
      </div>

      {/* Security pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="security-pattern"></div>
      </div>

      <div className="relative h-full flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-[400px] text-center transition-all duration-500 ease-out opacity-0 scale-80 animate-fade-scale">
          {/* Server Error Icon */}
          <div className="mb-8">
            <div className="relative">
              <div
                className="absolute inset-0 blur-xl bg-red-500/20 rounded-full animate-pulse-opacity"
                style={{
                  animation: "pulse-opacity 2s ease-in-out infinite reverse",
                }}
              />
              <FaServer className="w-24 h-24 mx-auto text-red-500 animate-pulse-scale-rotate" />
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
              <div className="w-6 h-6 rounded-full bg-red-500 animate-pulse"></div>
              <span className="font-bold text-4xl sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-red-400 to-red-500">
                {statusCode}
              </span>
              <div className="w-6 h-6 rounded-full bg-red-500 animate-pulse"></div>
            </div>

            {/* Error text */}
            <div className="space-y-4">
              <h1
                className="text-xl sm:text-2xl font-bold text-white tracking-wider uppercase whitespace-nowrap animate-pulse-opacity"
                style={{
                  animation: "pulse-opacity 2s ease-in-out infinite reverse",
                }}
              >
                {title}
              </h1>

              <div className="p-4 border-2 border-red-500/30 rounded-lg bg-gray-900/50 backdrop-blur-sm">
                <p className="text-sm sm:text-base text-gray-300 font-medium">
                  ⚠️ SYSTEM ERROR ⚠️
                  <br />
                  We're experiencing technical difficulties. Please try again or
                  contact support.
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

              <Button
                onClick={refreshPage}
                className="bg-teal-600 hover:bg-teal-700 font-semibold h-12"
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
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0A8.003 8.003 0 0112 15.657V20m-7.418-12A8 8 0 0120 12m0 0H15"
                  />
                </svg>
                Refresh
              </Button>
            </div>

            {/* Support Link */}
            <p className="text-sm text-gray-400">
              Need help?{" "}
              <a
                href="mailto:support@example.com"
                className="text-red-400 hover:text-red-300 underline"
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

export default RoutingError;
