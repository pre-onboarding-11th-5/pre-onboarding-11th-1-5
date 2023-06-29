import { useState } from "react";
import { Input, GuideMsg } from "./styles";

interface AuthInputProps {
  handleValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  testId: string;
  id: string;
  type: string;
  title: string;
  validateMessage: string;
}

function AuthInput({
  handleValue,
  value,
  testId,
  id,
  type,
  title,
  validateMessage,
}: AuthInputProps) {
  const [focus, setFocus] = useState<boolean>(false);

  const handleFocus = () => {
    if (value.length === 0 && focus) {
      setFocus(false);
    } else {
      setFocus(true);
    }
  };

  return (
    <div>
      <Input
        placeholder={title}
        id={id}
        data-testid={testId}
        onChange={handleValue}
        type={type}
        autoComplete="off"
        value={value}
        onFocus={handleFocus}
        onBlur={handleFocus}
        visible={value.length >= 1 && validateMessage.length !== 0}
      />
      <GuideMsg visible={value.length >= 1}>{validateMessage}</GuideMsg>
    </div>
  );
}

export default AuthInput;
