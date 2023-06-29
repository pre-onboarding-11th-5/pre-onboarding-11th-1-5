import { useCallback, useState } from "react";

const useInput = (initialValue: string) => {
  const [value, setValue] = useState(initialValue);

  const handleValue = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value);
    },
    [],
  );

  const reset = useCallback(() => setValue(() => initialValue), [initialValue]);

  return [value, handleValue, reset] as const;
};

export default useInput;
