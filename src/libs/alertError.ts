/* eslint-disable no-alert */
import { isAxiosError } from "axios";
import type { ErrorResponse } from "types/types";

const alertError = (e: unknown) => {
  if (isAxiosError<ErrorResponse>(e) && e.response) {
    alert(e.response.data.message);
  }
};

export default alertError;
