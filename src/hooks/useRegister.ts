/* eslint-disable no-alert */
import client from "axiosInstance/client";
import alertError from "libs/alertError";

const signUpAPI = (email: string, password: string) =>
  client.post("/auth/signup", {
    email,
    password,
  });

const useRegister = () => {
  const signUp = async (email: string, password: string) => {
    try {
      await signUpAPI(email, password);
      alert("회원가입에 성공했습니다. 로그인 페이지로 이동합니다.");
      return true;
    } catch (e) {
      alertError(e);
      return null;
    }
  };

  return signUp;
};

export default useRegister;
