import * as Yup from "yup";

export const validationSchema = Yup.object({
  username: Yup.string()
    .min(2, "Username must be at least 2 characters")
    .max(30, "Username must be 30 characters or less")
    .required("Username is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
});
