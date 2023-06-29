import styled from "styled-components";

import TodoInput from "components/Todo/TodoInput";

import { useCallback, useEffect, useState } from "react";
import useQuery from "hooks/useQuery";
import { TodoType } from "components/Todo/types";
import TodoItem from "components/Todo/TodoItem";
import isLoggedInFN from "hooks/isLoggedIn";
import { Navigate, useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  width: 100%;
  max-width: 600px;

  padding: 1rem;
`;
const TodoListWrapper = styled.div`
  padding: 1rem;

  ul {
    width: 100%;
  }

  h2 {
    font-size: 2rem;
  }
`;

function TodoPage() {
  const navigate = useNavigate();
  const [todos, setTodos] = useState<TodoType[]>();
  const { data, loading, error, status } = useQuery<TodoType[]>("todos");
  const [token, setToken] = useState<string | null>(isLoggedInFN());
  const onClickLogoutBtn = useCallback(() => {
    localStorage.removeItem("token");
    navigate("/signin");
  }, [navigate]);
  useEffect(() => {
    const handleSetToken = () => setToken(isLoggedInFN());
    window.addEventListener("storage", handleSetToken);
    return () => window.removeEventListener("storage", handleSetToken);
  }, []);

  useEffect(() => {
    if (!loading && data) {
      setTodos(data);
    }
    if (!loading && status === 401) {
      onClickLogoutBtn();
    }
  }, [data, loading, error, onClickLogoutBtn, status]);

  return token ? (
    <Wrapper>
      <TodoInput setTodos={setTodos} />
      <TodoListWrapper>
        <ul>
          {todos?.map((todo) => (
            <TodoItem
              id={todo.id}
              isCompleted={todo.isCompleted}
              todo={todo.todo}
              userId={todo.userId}
              key={todo.id}
              setTodos={setTodos}
            />
          ))}
        </ul>
      </TodoListWrapper>
    </Wrapper>
  ) : (
    <Navigate replace to="/signin" />
  );
}

export default TodoPage;
