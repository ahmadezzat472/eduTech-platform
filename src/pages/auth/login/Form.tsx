import { FaEnvelope, FaRocket } from "react-icons/fa";
import { useFormik } from "formik";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router";
import { login } from "@/services/login/login";
import { FaLock } from "react-icons/fa6";
import { useApiMutation } from "@/hooks/useApiMutation";
import { toast } from "sonner";
import { validationSchema } from "./validationSchema";
import CookieService from "@/services/cookies";

const LoginForm = () => {
  const navigate = useNavigate();
  const { mutate, isPending, error } = useApiMutation({
    mutationFn: login,
    onSuccess: (data) => {
      console.log(data);
      const { tokens } = data;

      CookieService.set("token", tokens, {
        path: "/",
        secure: true,
      });
      toast.success("Login successful");
      navigate(`/`);
    },
    onError: (error) => {
      toast.error(error.message || "An error occurred during login");
    },
  });

  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema,
    onSubmit: (values) => mutate(values),
  });

  return (
    <form onSubmit={formik.handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="email" className="text-white mb-2">
          Email
        </Label>
        <div className="relative">
          <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <Input
            id="email"
            name="email"
            type="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={`pl-10 bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:ring-blue-500 ${
              formik.touched.email && formik.errors.email
                ? "border-red-500"
                : ""
            } py-5`}
            placeholder="Enter your email"
          />
        </div>
        {formik.touched.email && formik.errors.email && (
          <p className="text-red-500 text-sm mt-1">{formik.errors.email}</p>
        )}
      </div>

      <div>
        <Label htmlFor="password" className="text-white mb-2">
          Password
        </Label>
        <div className="relative">
          <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <Input
            id="password"
            name="password"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={`pl-10 bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:ring-blue-500  formik.touched.password && formik.errors.password
              ? "border-red-500"
              : ""`}
            placeholder="Enter your password"
          />
        </div>
        {formik.touched.password && formik.errors.password && (
          <p className="text-red-500 text-sm mt-1">{formik.errors.password}</p>
        )}
      </div>

      {error && (
        <p className="text-red-400 text-sm">
          {error.message || "Login failed. Please try again."}
        </p>
      )}

      <Button
        type="submit"
        disabled={isPending}
        className="w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white hover:from-blue-600 hover:via-purple-600 hover:to-pink-600"
      >
        <div className="flex items-center justify-center gap-2">
          <FaRocket className="w-4 h-4" />
          {isPending ? "Launching..." : "Launch Login"}
        </div>
      </Button>
    </form>
  );
};

export default LoginForm;
