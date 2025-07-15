export interface RegisterResponse {
  status: number;
  message: string;
  data?: {
    id: string;
    userName: string;
    email: string;
    token?: string;
  };
}
