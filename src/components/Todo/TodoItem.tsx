import styled from "styled-components";
import React, { useEffect, useState } from "react";
import useMutation from "hooks/useMutation";
import apiSlash from "hooks/utils";
import { Button } from "./styles";

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
interface TodoItemProps extends TodoType {
  setTodos: React.Dispatch<React.SetStateAction<TodoType[] | undefined>>;
}
function TodoItem({ isCompleted, todo, id, setTodos }: TodoItemProps) {
  const [editMode, setEditMode] = useState<boolean>(false);
  const [inputTodo, setInputTodo] = useState("");

  const [
    updateTodo,
    { data: updateData, loading: updateLoading, status: updateStatus },
  ] = useMutation<TodoType>({
    method: "PUT",
    url: apiSlash<string | number>("todos", id),
  });
  const [deleteTodo, { loading: deleteLoading, status: deleteStatus }] =
    useMutation({
      method: "DELETE",
      url: apiSlash<string | number>("todos", id),
    });

  useEffect(() => {
    if (!updateLoading && updateData) {
      setTodos((prev) =>
        prev?.map((todos) => (todos.id === id ? updateData : todos)),
      );
    }
  }, [updateLoading, updateStatus]);

  useEffect(() => {
    if (!deleteLoading && deleteStatus === 204) {
      setTodos((prev) => prev?.filter((todos) => todos.id !== id));
    }
  }, [deleteLoading, deleteStatus, setTodos, id]);

  const handleEdit = () => {
    setEditMode((prev) => !prev);
    setInputTodo(todo);
  };
  const handleCheck = () => updateTodo({ id, todo, isCompleted: !isCompleted });
  const handleUpdate = () => {
    if (todo !== inputTodo) updateTodo({ id, todo: inputTodo, isCompleted });
    setEditMode((prev) => !prev);
  };
  const handleDelete = () => deleteTodo(id);

  return (
    <Li>
      <>
        <label htmlFor={`${id}`}>
          <input
            id={`${id}`}
            type="checkbox"
            checked={isCompleted}
            onChange={handleCheck}
          />
          {editMode ? (
            <input
              id={id.toString()}
              value={inputTodo}
              onChange={(e) => setInputTodo(e.currentTarget.value)}
            />
          ) : (
            <span>{todo}</span>
          )}
        </label>
        <Button
          type="button"
          data-testid="modify-button"
          onClick={editMode ? handleUpdate : handleEdit}
        >
          {editMode ? "제출" : "수정"}
        </Button>
        <Button
          type="button"
          data-testid="delete-button"
          onClick={editMode ? handleEdit : handleDelete}
        >
          {editMode ? "취소" : "삭제"}
        </Button>
      </>
    </Li>
  );
}

export default React.memo(TodoItem);
