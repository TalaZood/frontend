export type OtpRequest = {
  userName: string;
  message: "login" | "register";
};

export type LoginResponse = {
  accessToken: string;
  refreshToken: string;
};

export type RefreshResponse = {
  accessToken: string;
  refreshToken: string;
};
