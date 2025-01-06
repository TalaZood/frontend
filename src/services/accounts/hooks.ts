import { otpRequest, login } from "./functions";
import { ACCOUNTS_QUERY_KEYS } from "./constants";
import { useMutation } from "@tanstack/react-query";
import type { LoginResponse, OtpRequest } from "./types";

export function useOtpRequest(options?: {
  onSuccess: (response: OtpRequest) => void;
}) {
  return useMutation({
    mutationKey: [ACCOUNTS_QUERY_KEYS.OTP_REQUEST],
    mutationFn: otpRequest,
    ...options,
  });
}

export function useLogin(options?: {
  onSuccess: (response: LoginResponse) => void;
}) {
  return useMutation({
    mutationKey: [ACCOUNTS_QUERY_KEYS.LOGIN],
    mutationFn: login,
    ...options,
  });
}
