import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

import useMutation from "hooks/useMutation";

import styled from "styled-components";
import isLoggedInFN from "hooks/isLoggedIn";

import { Form, Button } from "./styles";
import AuthInput from "./AuthInput";

interface AuthFormResponseData {
  access_token?: string;
}
const Section = styled.section`
  text-align: center;
`;
const ErrorMessage = styled.span`
  font-size: medium;
  color: tomato;
`;
function AuthForm({ isSignin = false }: { isSignin: boolean }) {
  const navigate = useNavigate();

  const [validateMessage, setValidateMessage] = useState<{
    email: string;
    password: string;
  }>({ email: "", password: "" });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signHandler, { data, loading, status, error }] =
    useMutation<AuthFormResponseData>({
      method: "POST",
      url: `/auth/${isSignin ? "signin" : "signup"}`,
    });
  useEffect(() => {
    if (!email.includes("@"))
      setValidateMessage((prev) => ({ ...prev, email: "'@'를 포함해주세요" }));
    else setValidateMessage((prev) => ({ ...prev, email: "" }));
    if (password.length < 8)
      setValidateMessage((prev) => ({
        ...prev,
        password: "  비밀번호는 8글자 이상으로 해주세요.",
      }));
    else setValidateMessage((prev) => ({ ...prev, password: "" }));
  }, [email, password]);
  useEffect(() => {
    if (!loading && data && data.access_token) {
      localStorage.setItem("token", data.access_token);
      navigate("/todo");
    }
    if (!loading && status === 201) {
      navigate("/signin");
    }
  }, [data, loading, status, error, navigate]);

  const testId = isSignin ? "signin-button" : "signup-button";
  const text = isSignin ? "로그인" : "회원가입";

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signHandler({ email, password });
  };

  return isLoggedInFN() ? (
    <Navigate replace to="/todo" />
  ) : (
    <Form onSubmit={handleSubmit}>
      <Section>
        <legend>{text}</legend>
        <AuthInput
          id="email"
          testId="email-input"
          handleValue={handleEmail}
          value={email}
          validateMessage={validateMessage.email}
          type="text"
          title="이메일"
        />
        <AuthInput
          id="password"
          testId="password-input"
          handleValue={handlePassword}
          validateMessage={validateMessage.password}
          value={password}
          type="password"
          title="패스워드"
        />
        <Button
          type="submit"
          data-testid={testId}
          disabled={
            validateMessage.email !== "" || validateMessage.email !== ""
          }
        >
          {text}
        </Button>

        {error ? <ErrorMessage>{error}</ErrorMessage> : null}
      </Section>
    </Form>
  );
}

export default AuthForm;
