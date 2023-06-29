import styled from "styled-components";
import TodoItem from "./TodoItem";
import type { TodoType } from "./types";

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
  isUpdate: () => void;
  // eslint-disable-next-line react/require-default-props
  todoData?: TodoType[];
  errorMsg: string;
}

function TodoList({ isUpdate, todoData, errorMsg }: TodoListProps) {
  return (
    <TodoListWrapper>
      {errorMsg && <h2>Error가 발생했습니다..!</h2>}
      <ul>
        {todoData?.map((e) => (
          <TodoItem todo={e} key={e.id} isUpdate={isUpdate} />
        ))}
      </ul>
    </TodoListWrapper>
  );
}

export default TodoList;
