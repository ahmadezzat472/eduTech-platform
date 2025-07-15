import { BACKEND_BASE_URL } from "@/constants/backendAPIsConfig";
import CookieService from "@/services/cookies";

type ApiError = {
  errors: string[];
};
export async function api<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  const isFormData = options.body instanceof FormData;
  const token = CookieService.get("token");

  const headers: HeadersInit = {
    ...(token && { Authorization: `Bearer ${token}` }),
    ...(isFormData
      ? {}
      : {
          "Content-Type": "application/json",
          Accept: "application/json",
        }),
    ...(options.headers || {}),
  };

  const response = await fetch(`${BACKEND_BASE_URL}${endpoint}`, {
    ...options,
    method: options.method || "GET",
    headers,
  });

  // Check for any HTTP errors
  if (!response.ok) {
    const errorBody: ApiError = await response.json();
    console.log("errorBody", errorBody);
    throw errorBody;
  }

  const data = await response.json();

  return data;
}
