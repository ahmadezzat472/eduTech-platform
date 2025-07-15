import { api } from "@/services/api";

type RegisterParams = {
  username: string;
  password: string;
  email: string;
};

export const register = async ({
  username,
  email,
  password,
}: RegisterParams) => {
  const response = await api<unknown>(`Account/Register`, {
    method: "POST",
    body: JSON.stringify({
      username: username,
      email,
      password,
    }),
  });

  return response;
};
