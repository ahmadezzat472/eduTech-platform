export const BACKEND_BASE_URL =
  process.env.NODE_ENV === "production"
    ? "/api/"
    : "http://educationtech.runasp.net/api/";
