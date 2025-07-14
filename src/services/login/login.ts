import { api } from "@/services/api";

type LoginParams = {
  email: string;
  password: string;
};

export const login = async ({ email, password }: LoginParams) => {
  const response = await api<LoginResponse>(`auth/login`, {
    method: "POST",
    body: JSON.stringify({
      email,
      password,
    }),
  });
  return response;
};
