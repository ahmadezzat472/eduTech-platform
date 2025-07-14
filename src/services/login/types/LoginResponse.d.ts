interface LoginResponse {
  status: number;
  message: string;
  data: {
    id: number;
    name: string;
    first_name?: string;
    last_name?: string;
    email: string;
    role: number;
    success: number;
    token: string;
    hospital: {
      id: number;
      title: string;
    };
  };
}
