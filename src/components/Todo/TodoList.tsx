import styled from "styled-components";
import { useEffect, useState } from "react";
import type { AxiosResponseType } from "types/types";
import useGetTodos from "./hooks/useGetTodos";

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
  const [data, setData] = useState<AxiosResponseType<TodoType[]>>({
    data: null,
    error: null,
  });
  const [getTodos] = useGetTodos();

  const getData = async () => {
    const todos = await getTodos();
    setData(todos);
  };

  useEffect(() => {
    if (localStorage.getItem("jwt")) {
      getData();
    }
  }, [update]);

  return (
    <TodoListWrapper>
      {data.error && <h2>Error가 발생했습니다..!</h2>}
      <ul>
        {data.data?.map((e) => (
          <TodoItem todo={e} key={e.id} isUpdate={isUpdate} />
        ))}
      </ul>
    </TodoListWrapper>
  );
}

export default TodoList;
