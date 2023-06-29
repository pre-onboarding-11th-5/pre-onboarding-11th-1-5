import { useState, useEffect } from "react";

// email, password 검증
const useValidation = (type: "email" | "password", value: string) => {
  const [validation, setValidation] = useState<boolean>(false);

  useEffect(() => {
    const emailRegExp = /@/;
    const passwordRegExp = /^.{8,}$/;
    if (type === "email") {
      setValidation(emailRegExp.test(value));
    } else {
      setValidation(passwordRegExp.test(value));
    }
  }, [type, value]);

  return validation;
};

export default useValidation;
