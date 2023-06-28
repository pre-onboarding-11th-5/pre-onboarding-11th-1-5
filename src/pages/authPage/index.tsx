import AuthForm from "components/Auth/AuthForm";
import useRedirectByJwt from "hooks/useRedirectByJwt";

function AuthPage() {
  useRedirectByJwt();

  return <AuthForm />;
}

export default AuthPage;
