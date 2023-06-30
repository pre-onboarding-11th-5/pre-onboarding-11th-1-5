import styled from "styled-components";
import TodoInput from "components/Todo/TodoInput";
import TodoList from "components/Todo/TodoList";
import useGetTodos from "hooks/useGetTodos";

const Wrapper = styled.div`
  width: 100%;
  max-width: 600px;

  padding: 1rem;
`;

function TodoPage() {
  const { todoData, refetch, errorMsg } = useGetTodos();
  return (
    <Wrapper>
      <TodoInput isUpdate={refetch} />
      <TodoList isUpdate={refetch} todoData={todoData} errorMsg={errorMsg} />
    </Wrapper>
  );
}

export default TodoPage;
