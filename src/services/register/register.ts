import { api } from "@/services/api";

type RegisterParams = {
  userName: string;
  email: string;
  password: string;
};

interface RegisterResponse {
  status: number;
  message?: string;
  data?: any;
}

export const register = async ({ userName, email, password }: RegisterParams) => {
  const response = await api<RegisterResponse>(`Account/Register`, {
    method: "POST",
    body: JSON.stringify({
      username: userName,
      email,
      password,
    }),
  });

  return response;
};
