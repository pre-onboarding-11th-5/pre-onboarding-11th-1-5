import styled from "styled-components";
import { useState } from "react";
import { Button, Input } from "./styles";
import useCreateTodo from "./hooks/useCreateTodo";

import type { TodoType } from "./types";

const TodoInputWrapper = styled.div`
  display: flex;
  gap: 1rem;
  padding: 1rem;
`;

interface TodoInputProps {
  isUpdate: () => void;
}

function TodoInput({ isUpdate }: TodoInputProps) {
  const [todo, setTodo] = useState<TodoType>({
    todo: "",
    isCompleted: false,
  });

  const [createTodo] = useCreateTodo();

  const handleTodoValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo({ ...todo, todo: e.target.value });
  };

  const addTodo = async () => {
    const { data } = await createTodo(todo.todo);
    if (data) {
      isUpdate();
    }
  };

  return (
    <TodoInputWrapper>
      <Input
        data-testid="new-todo-input"
        value={todo.todo}
        onChange={handleTodoValue}
      />
      <Button type="button" data-testid="new-todo-add-button" onClick={addTodo}>
        추가
      </Button>
    </TodoInputWrapper>
  );
}

export default TodoInput;
