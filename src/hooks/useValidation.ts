import { useState, useEffect } from "react";

// email, password 검증
const useValidation = (
  type: "email" | "password",
  value: string,
): [boolean] => {
  const [validation, setValidation] = useState<boolean>(false);
  const emailRegExp = /@/;
  const passwordRegExp = /^.{8,}$/;

  useEffect(() => {
    if (type === "email") {
      setValidation(emailRegExp.test(value));
    } else {
      setValidation(passwordRegExp.test(value));
    }
  }, [value]);

  return [validation];
};

export default useValidation;
