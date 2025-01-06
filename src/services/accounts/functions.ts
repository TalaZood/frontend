import { http } from "@/lib/utils/http";
import type { LoginResponse, OtpRequest, RefreshResponse } from "./types";

export async function otpRequest(payload: {
  phone: string;
  source?: string;
  sourceId?: string;
}) {
  const response = await http.post<OtpRequest>("/idp/auth/otpRequest", {
    body: JSON.stringify({
      username: payload.phone,
      source: Number(payload.source) || undefined,
      sourceId: Number(payload.sourceId) || undefined,
    }),
    throwError: true,
  });

  return response.data;
}

export async function login(payload: { phone: string; otpCode: string }) {
  const response = await http.post<LoginResponse>("/idp/auth/login", {
    body: JSON.stringify({
      username: payload.phone,
      code: payload.otpCode,
    }),
    throwError: true,
  });

  return response.data;
}

export async function refresh(payload: { refreshToken: string }) {
  const response = await http.post<RefreshResponse>("/idp/auth/refresh", {
    body: JSON.stringify({
      refreshToken: payload.refreshToken,
    }),
  });

  return response.data;
}

export async function logout(payload: { refreshToken: string }) {
  const response = await http.post("/idp/auth/logout", {
    body: JSON.stringify({
      refreshToken: payload.refreshToken,
    }),
  });

  return response.data;
}
