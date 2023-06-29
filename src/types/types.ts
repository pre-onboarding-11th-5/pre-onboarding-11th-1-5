import { AxiosError } from "axios";

export type AxiosResponseType<T> = {
  data: null | T;
  error?: null | AxiosError;
};

export type ErrorResponse = {
  statusCode: number;
  message: string | string[];
  error?: string;
};

export type SignInType = {
  access_token: string;
};
