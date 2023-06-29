import styled from "styled-components";
import { useEffect, useState } from "react";

import useGetTodos from "hooks/useGetTodos";
import type { TodoType } from "./types";

import TodoItem from "./TodoItem";

const TodoListWrapper = styled.div`
  padding: 1rem;

  ul {
    width: 100%;
  }

  h2 {
    font-size: 2rem;
  }
`;

interface TodoListProps {
  update: boolean;
  isUpdate: () => void;
}

function TodoList({ update, isUpdate }: TodoListProps) {
  const [data, setData] = useState<TodoType[]>();
  const [error, setError] = useState(false);
  const [getTodos] = useGetTodos();

  useEffect(() => {
    if (localStorage.getItem("jwt")) {
      (async () => {
        const { data: todos } = await getTodos();
        if (todos) setData(todos);
        else setError(true);
      })();
    }
  }, [update]);

  return (
    <TodoListWrapper>
      {error && <h2>Error가 발생했습니다..!</h2>}
      <ul>
        {data?.map((e) => (
          <TodoItem todo={e} key={e?.id} isUpdate={isUpdate} />
        ))}
      </ul>
    </TodoListWrapper>
  );
}

export default TodoList;
