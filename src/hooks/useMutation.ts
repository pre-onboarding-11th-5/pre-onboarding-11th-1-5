import { useState } from "react";

import client from "axiosInstance/client";
import isLoggedInFN from "./isLoggedIn";

type Method = "POST" | "DELETE" | "PUT";
interface UseMuataionForm<T> {
  data?: T;
  status: number;
  error?: string;
  loading: boolean;
}
interface UseMutationProps {
  method: Method;
  url: string;
}

type UseMutationReturnType<T> = [(data: any) => void, UseMuataionForm<T>];

export default function useMutation<T>({
  method,
  url,
}: UseMutationProps): UseMutationReturnType<T> {
  const [state, setState] = useState<UseMuataionForm<T>>({
    data: undefined,
    loading: false,
    status: 0,
    error: "",
  });

  function handler(data_obj: any) {
    const HANDLE_DATA = JSON.stringify({ ...data_obj });
    setState((prev) => ({ ...prev, loading: true }));

    client(url, {
      method,
      headers: {
        Authorization: isLoggedInFN() ? `Bearer ${isLoggedInFN()}` : "",
        "Content-Type": "application/json",
      },
      data: HANDLE_DATA,
    })
      .then((res) => {
        setState((prev) => ({ ...prev, status: res.status }));
        return res.data;
      })
      .catch((res) => {
        const {
          response: {
            data: { message, statusCode },
          },
        } = res;
        setState((prev) => ({ ...prev, error: message, status: statusCode }));
      })
      .then((data) => {
        setState((prev) => ({ ...prev, data }));
      })
      .finally(() => setState((prev) => ({ ...prev, loading: false })));
  }

  return [handler, state];
}
