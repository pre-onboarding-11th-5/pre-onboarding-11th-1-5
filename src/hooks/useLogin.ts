/* eslint-disable no-alert */
import client from "axiosInstance/client";
import alertError from "libs/alertError";

import type { SignInType } from "types/types";

const signInAPI = (email: string, password: string) =>
  client.post<SignInType>("/auth/signin", {
    email,
    password,
  });

const useLogin = () => {
  const signIn = async (email: string, password: string) => {
    try {
      const {
        data: { access_token: token },
      } = await signInAPI(email, password);

      localStorage.setItem("jwt", token);
      alert("로그인 되었습니다.");
      return token;
    } catch (e) {
      alertError(e);
      return null;
    }
  };

  return signIn;
};

export default useLogin;
