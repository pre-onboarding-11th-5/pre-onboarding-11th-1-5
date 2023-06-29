import useMutation from "hooks/useMutation";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { Button, Input } from "./styles";
import { TodoType } from "./types";

const TodoInputWrapper = styled.div`
  display: flex;
  gap: 1rem;
  padding: 1rem;
`;

function TodoInput({
  setTodos,
}: {
  setTodos: React.Dispatch<React.SetStateAction<TodoType[] | undefined>>;
}) {
  const [todo, setTodo] = useState("");
  const [createTodo, { loading, status, data, error }] = useMutation<TodoType>({
    method: "POST",
    url: "todos",
  });

  useEffect(() => {
    if (loading !== true && data) {
      setTodos((prev) => [...prev!, data]);
    }
  }, [status, error, data, loading, setTodos]);

  const handleTodoValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };
  const addTodo = () => {
    if (loading) return;
    createTodo({ todo });
    setTodo("");
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
