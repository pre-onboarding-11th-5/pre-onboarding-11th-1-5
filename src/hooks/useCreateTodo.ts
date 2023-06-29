/* eslint-disable no-alert */
import client from "axiosInstance/client";
import alertError from "libs/alertError";
import type { TodoType } from "../components/Todo/types";

const createTodoAPI = (todo: string) =>
  client.post<TodoType>("/todos", { todo });

const useCreateTodo = () => {
  const createTodo = async (todo: string) => {
    try {
      const { data } = await createTodoAPI(todo);
      alert("추가에 성공했습니다.");
      return data;
    } catch (e) {
      alertError(e);
      return null;
    }
  };

  return createTodo;
};

export default useCreateTodo;
