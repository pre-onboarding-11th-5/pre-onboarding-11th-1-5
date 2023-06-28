/* eslint-disable no-alert */
import axios from "axios";
import client from "axiosInstance/client";

import type { AxiosResponseType } from "types/types";

const signInAPI = async (email: string, password: string): Promise<any> => {
  try {
    const response = await client.post("/auth/signin", {
      email,
      password,
    });

    alert("로그인 되었습니다.");
    localStorage.setItem("jwt", response.data.access_token);
    return response.data;
  } catch (e) {
    if (axios.isAxiosError(e)) {
      alert(e.response?.data.message);
    }
    throw e;
  }
};

const useLogin = () => {
  const signIn = async (
    email: string,
    password: string,
  ): Promise<AxiosResponseType<any>> => {
    try {
      const data = await signInAPI(email, password);
      return { data, error: null };
    } catch (e) {
      if (axios.isAxiosError(e)) {
        alert(e.response?.data.message);
        return { data: null, error: e };
      }
      throw e;
    }
  };

  return [signIn];
};

export default useLogin;
