/* eslint-disable no-alert */
import client from "axiosInstance/client";
import alertError from "libs/alertError";
import type { TodoType } from "../components/Todo/types";

const updateTodoAPI = (todo: TodoType) =>
  client.put<TodoType>(
    `/todos/${todo.id}`,
    {
      todo: todo.todo,
      isCompleted: todo.isCompleted,
    },
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        "Content-Type": "application/json",
      },
    },
  );

const useUpdateTodo = () => {
  const updateTodo = async (todo: TodoType) => {
    try {
      const { data } = await updateTodoAPI(todo);
      alert("수정 되었습니다!");
      return data;
    } catch (e) {
      alertError(e);
      return null;
    }
  };

  return updateTodo;
};

export default useUpdateTodo;
