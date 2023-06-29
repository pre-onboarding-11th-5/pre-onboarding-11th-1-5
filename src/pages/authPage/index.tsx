import AuthForm from "components/Auth/AuthForm";

function AuthPage({ type }: { type: "signin" | "signup" }) {
  return <AuthForm isSignin={type === "signin"} />;
}

export default AuthPage;
