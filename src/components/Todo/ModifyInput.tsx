import { useState } from "react";
import useUpdateTodo from "hooks/useUpateTodo";
import { Button, Input } from "./styles";
import type { TodoType } from "./types";

interface ModifyInputProps {
  todo: TodoType;
  handleEdit: () => void;
  isUpdate: () => void;
}

function ModifyInput({ todo, handleEdit, isUpdate }: ModifyInputProps) {
  const [value, setValue] = useState(todo.todo);
  const updateTodo = useUpdateTodo();

  const handleSubmit = async () => {
    if (todo.todo === value) {
      handleEdit();
      return;
    }

    const updatedTodo = await updateTodo({
      ...todo,
      todo: value,
    });
    if (updatedTodo) {
      isUpdate();
      handleEdit();
    }
  };

  const handleCancel = () => {
    handleEdit();
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <>
      <Input
        id={`${todo.id}`}
        data-testid="modify-input"
        value={value}
        onChange={handleInput}
      />
      <Button type="button" data-testid="submit-button" onClick={handleSubmit}>
        제출
      </Button>
      <Button type="button" data-testid="cancel-button" onClick={handleCancel}>
        취소
      </Button>
    </>
  );
}

export default ModifyInput;
