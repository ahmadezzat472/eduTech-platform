import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import AnimatedCircle from "../login/AnimatedCircle";
import RegisterImage from "./RegisterImage";
import NavigationButtons from "./NavigationButtons";
import RegisterForm from "./Form";

const Register = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Optional: redirect if already logged in
  }, [navigate]);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-pink-900 to-gray-900">
      <AnimatedCircle />

      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4">
        <div className="text-center w-full max-w-[400px] mx-auto transition-all duration-600 ease-out opacity-0 translate-y-[-20px] animate-fade-in">
          <div className="transition-all duration-600 ease-out opacity-0 translate-y-[20px] animate-fade-in-delay">
            <Card className="bg-gray-800/50 border-gray-600 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-white">
                  <RegisterImage />
                  Register
                </CardTitle>
                <CardDescription className="text-gray-400">
                  Enter your details to join the galaxy.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <RegisterForm />
                <NavigationButtons />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
