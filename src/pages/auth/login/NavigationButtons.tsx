import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router";

const NavigationButtons = () => {
  const navigate = useNavigate();
  const goHome = () => navigate("/");
  const goToRegister = () => navigate("/register");

  return (
    <>
      <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
        <Button
          variant="outline"
          onClick={goHome}
          className="bg-gray-800 text-white border-gray-600 hover:bg-gray-700"
        >
          Return Home
        </Button>
        <Button
          variant="outline"
          onClick={goToRegister}
          className="bg-teal-600 text-white border-teal-600 hover:bg-teal-700"
        >
          Create Account
        </Button>
      </div>

      {/* Support Link */}
      <p className="text-sm text-gray-400 mt-4">
        Need help?{" "}
        <a
          href="mailto:support@example.com"
          className="text-blue-400 hover:text-blue-300 underline"
        >
          Contact Support
        </a>
      </p>
    </>
  );
};

export default NavigationButtons;
