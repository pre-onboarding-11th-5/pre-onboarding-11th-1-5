import styled from "styled-components";

import useInput from "hooks/useInput";
import { Button, Input } from "./styles";
import useCreateTodo from "../../hooks/useCreateTodo";

const TodoInputWrapper = styled.div`
  display: flex;
  gap: 1rem;
  padding: 1rem;
`;

interface TodoInputProps {
  isUpdate: () => void;
}

function TodoInput({ isUpdate }: TodoInputProps) {
  const [todo, handleTodoValue, reset] = useInput("");

  const createTodo = useCreateTodo();

  const addTodo = async () => {
    const createTodoResponse = await createTodo(todo);
    if (createTodoResponse) {
      isUpdate();
      reset();
    }
  };

  return (
    <TodoInputWrapper>
      <Input
        data-testid="new-todo-input"
        value={todo}
        onChange={handleTodoValue}
      />
      <Button type="button" data-testid="new-todo-add-button" onClick={addTodo}>
        추가
      </Button>
    </TodoInputWrapper>
  );
}

export default TodoInput;
