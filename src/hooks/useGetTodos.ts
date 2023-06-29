/* eslint-disable no-alert */
import client from "axiosInstance/client";
import alertError from "libs/alertError";
import type { TodoType } from "../components/Todo/types";

const getTodosAPI = () =>
  client.get<TodoType[]>("/todos", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
  });

const useGetTodos = () => {
  const getTodos = async () => {
    try {
      const { data: todos } = await getTodosAPI();
      return todos;
    } catch (e) {
      alertError(e);
      return null;
    }
  };

  return getTodos;
};

export default useGetTodos;
