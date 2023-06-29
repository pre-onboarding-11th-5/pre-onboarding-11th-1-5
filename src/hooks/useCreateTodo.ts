/* eslint-disable no-alert */
import axios from "axios";
import client from "axiosInstance/client";
import type { ErrorResponse } from "types/types";
import type { TodoType } from "../components/Todo/types";

const createTodoAPI = (todo: string) =>
  client.post<TodoType>(
    "/todos",
    { todo },
    { headers: { Authorization: `Bearer ${localStorage.getItem("jwt")}` } },
  );

const useCreateTodo = () => {
  const createTodo = async (todo: string) => {
    try {
      const { data } = await createTodoAPI(todo);
      alert("추가에 성공했습니다.");
      return data;
    } catch (e) {
      if (axios.isAxiosError<ErrorResponse>(e) && e.response) {
        alert(e.response.data.message);
      }
      return null;
    }
  };

  return createTodo;
};

export default useCreateTodo;
