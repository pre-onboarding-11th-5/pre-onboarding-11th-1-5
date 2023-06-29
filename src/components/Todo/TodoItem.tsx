import styled from "styled-components";
import { useState } from "react";
import { Button } from "./styles";

import ModifyInput from "./ModifyInput";
import useUpdateTodo from "./hooks/useUpateTodo";
import useDeleteTodo from "../../hooks/useDeleteTodo";

import type { TodoType } from "./types";

const Li = styled.li`
  width: 100%;

  display: flex;
  align-items: center;
  gap: 1rem;

  margin: 1rem 0;

  label {
    flex-grow: 1;
  }

  span {
    font-size: 1.6rem;
  }
`;

interface TodoItemProps {
  todo: TodoType;
  isUpdate: () => void;
}

function TodoItem({ todo, isUpdate }: TodoItemProps) {
  const [edit, setEdit] = useState<boolean>(false);
  const [check, setCheck] = useState<boolean>(todo.isCompleted);
  const [updateTodo] = useUpdateTodo();
  const deleteTodo = useDeleteTodo();

  const handleEdit = () => {
    setEdit(!edit);
  };

  const handleCheck = async () => {
    const { data } = await updateTodo({
      ...todo,
      isCompleted: !todo.isCompleted,
    });
    if (data) {
      setCheck(data.isCompleted);
      isUpdate();
    }
  };

  const handleDelete = async () => {
    const deleteTodoResponse = await deleteTodo(todo.id);
    if (deleteTodoResponse) {
      isUpdate();
    }
  };

  return (
    <Li>
      {edit && (
        <ModifyInput todo={todo} handleEdit={handleEdit} isUpdate={isUpdate} />
      )}
      {!edit && (
        <>
          <label htmlFor={`${todo.id}`}>
            <input
              id={`${todo.id}`}
              type="checkbox"
              checked={check}
              onChange={handleCheck}
            />
            <span>{todo.todo}</span>
          </label>
          <Button
            type="button"
            data-testid="modify-button"
            onClick={handleEdit}
          >
            수정
          </Button>
          <Button
            type="button"
            data-testid="delete-button"
            onClick={handleDelete}
          >
            삭제
          </Button>
        </>
      )}
    </Li>
  );
}

export default TodoItem;
