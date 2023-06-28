import { AxiosError } from "axios";

export type AxiosResponseType<T> = {
  data: null | T;
  error: null | AxiosError;
};
