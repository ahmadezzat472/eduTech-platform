import { Link } from "react-router";
import { ShieldAlert } from "lucide-react";
import { Button } from "@/components/ui/button";

const Unauthorized = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-900 p-6">
      <div className="flex flex-col items-center space-y-6 animate-fade-in-up">
        <div className="bg-red-300 p-6 rounded-full shadow-md animate-pulse-opacity">
          <ShieldAlert className="text-red-700 w-16 h-16 animate-bounce" />
        </div>
        <h1 className="text-3xl font-bold text-white">Access Denied</h1>
        <p className="text-gray-400 font-semibold text-center max-w-md">
          You don't have permission to access this page. Please make sure you
          are logged in with the correct account.
        </p>
        <div className="flex space-x-4">
          <Link to="/">
            <Button className="font-semibold" size={"lg"}>
              Go to Home
            </Button>
          </Link>
          <Link to="/login">
            <Button
              variant={"outline"}
              size={"lg"}
              className="text-white font-semibold"
            >
              Login
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Unauthorized;
