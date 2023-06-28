import styled from "styled-components";

import useRedirectByJwt from "hooks/useRedirectByJwt";
import TodoInput from "components/Todo/TodoInput";
import TodoList from "components/Todo/TodoList";

import { useState } from "react";

const Wrapper = styled.div`
  width: 100%;
  max-width: 600px;

  padding: 1rem;
`;

function TodoPage() {
  const [update, setUpdate] = useState<boolean>(false);
  useRedirectByJwt();

  const handleUpdate = () => {
    setUpdate(!update);
  };

  return (
    <Wrapper>
      <TodoInput isUpdate={handleUpdate} />
      <TodoList update={update} isUpdate={handleUpdate} />
    </Wrapper>
  );
}

export default TodoPage;
