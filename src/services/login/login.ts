import { api } from "@/services/api";

type LoginParams = {
  email: string;
  password: string;
};

export const login = async ({ email, password }: LoginParams) => {
  const response = await api<LoginResponse>(`Account/Login`, {
    method: "POST",
    body: JSON.stringify({
      Email: email,
      password: password,
    }),
  });
  return response;
};
