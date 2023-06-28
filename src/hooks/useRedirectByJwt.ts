/* eslint-disable no-alert */
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

// jwt 토큰 여부에 따른 리다이렉트
const useRedirectByJwt = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const jwt = localStorage.getItem("jwt");

    if (
      !!jwt &&
      (location.pathname === "/signin" || location.pathname === "/signup")
    ) {
      alert("Todo페이지로 이동합니다.");
      navigate("/todo");
    }

    if (!jwt && location.pathname === "/todo") {
      alert("로그인해주세요.");
      navigate("/signin");
    }
  }, []);
};

export default useRedirectByJwt;
