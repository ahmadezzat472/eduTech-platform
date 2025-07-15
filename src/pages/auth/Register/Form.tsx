import { FaEnvelope, FaRocket, FaUser } from "react-icons/fa";
import { useFormik } from "formik";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router";
import { FaLock } from "react-icons/fa6";
import { toast } from "sonner";
import { useApiMutation } from "@/hooks/useApiMutation";
import { register } from "@/services/register/register"; // ✅ Create this function
import { validationSchema } from "./validationSchema";

const RegisterForm = () => {
  const navigate = useNavigate();

  const { mutate, isPending, error } = useApiMutation({
    mutationFn: register,
    onSuccess: () => {
      toast.success("Registered successfully!");
      navigate("/login");
    },
    onError: (error) => {
      toast.error(error.errors[0] || "Registration failed");
    },
  });

  const formik = useFormik({
    initialValues: { username: "", email: "", password: "" },
    validationSchema,
    onSubmit: (values) => mutate(values),
  });

  return (
    <form onSubmit={formik.handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="username" className="text-white mb-2">
          User Name
        </Label>
        <div className="relative">
          <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <Input
            id="username"
            name="username"
            type="text"
            value={formik.values.username}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={`pl-10 bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 py-5 ${
              formik.touched.username && formik.errors.username
                ? "border-red-500"
                : ""
            }`}
            placeholder="Enter your username"
          />
        </div>
        {formik.touched.username && formik.errors.username && (
          <p className="text-red-500 text-sm mt-1">{formik.errors.username}</p>
        )}
      </div>

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
            className={`pl-10 bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 py-5 ${
              formik.touched.email && formik.errors.email
                ? "border-red-500"
                : ""
            }`}
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
            className={`pl-10 bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 py-5 ${
              formik.touched.password && formik.errors.password
                ? "border-red-500"
                : ""
            }`}
            placeholder="Enter your password"
          />
        </div>
        {formik.touched.password && formik.errors.password && (
          <p className="text-red-500 text-sm mt-1">{formik.errors.password}</p>
        )}
      </div>

      {error && (
        <p className="text-red-400 text-sm">
          {error.errors[0] || "Register failed."}
        </p>
      )}

      <Button
        type="submit"
        disabled={isPending}
        className="w-full bg-gradient-to-r from-pink-500 via-pink-600 to-pink-700 text-white hover:from-pink-600 hover:via-pink-700 hover:to-pink-800"
      >
        <div className="flex items-center justify-center gap-2">
          <FaRocket className="w-4 h-4" />
          {isPending ? "Registering..." : "Launch Register"}
        </div>
      </Button>
    </form>
  );
};

export default RegisterForm;
