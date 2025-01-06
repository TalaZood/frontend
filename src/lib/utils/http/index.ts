/* eslint-disable @typescript-eslint/no-explicit-any */

interface RequestOptions extends RequestInit {
  throwError?: boolean;
  params?: Record<string, any>;
}

async function request<T>(url: string, options: RequestOptions = {}) {
  options.headers = {
    "Content-Type": "application/json",
    ...options.headers,
  };

  const params = options.params
    ? `?${new URLSearchParams(options.params || "").toString()}`
    : "";
  const fullUrl = process.env.NEXT_PUBLIC_API_BASE_URL + url + params;

  try {
    const response = await fetch(fullUrl, options);

    if (!response.ok) {
      throw response;
    }

    const result = await response.json();

    return result as { data: T };
  } catch (error) {
    console.log("error", error);

    return { data: <T>{}, error: "NOT HANDLED ERROR" };
  }
}

export const http = {
  get: <T>(url: string, options?: RequestOptions) => {
    return request<T>(url, { method: "GET", ...options });
  },
  post: <T>(url: string, options?: RequestOptions) => {
    return request<T>(url, {
      method: "POST",
      body: options?.body || undefined,
      ...options,
    });
  },
};
